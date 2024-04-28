import { initAppState } from './../store/app';
import { initAccountState } from './../store/account';
import { storeVanilla } from '@store';
import size from 'lodash/size';
import { Alert } from 'react-native';
import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const END_POINT = __DEV__ ? 'https://api.thucung.com/api/v1' : 'https://api.thucung.com/api/v1';
export const SOCKET_URL = __DEV__ ? '' : '';
export const TIME_OUT = 15000;
export const CODE_SUCCESS = 200;
export const CODE_TIME_OUT = 408;
export const CODE_EXPIRED_TOKEN = 401;
export const TIMEOUT_ERROR = 'TIMEOUT_ERROR';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const API_KEY_MAP = 'AIzaSyB70BolCDDNuTo_ptgsCZ_z4FXPeffBmNg'; // api key for dev/test

const defaultConfig: AxiosRequestConfig = {
  baseURL: END_POINT,
  timeout: TIME_OUT,
  headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
};

const ApiInstance = axios.create(defaultConfig);
ApiInstance.interceptors.request.use(function (config: any) {
  const token = storeVanilla.getState().account.token;
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

ApiInstance.interceptors.request.use(
  (config: any) => config,
  (error: any) => error,
);

let isRefreshing = false;
let refreshSubscribers: any[] = [];

/**
 * Stores all pending request in array.
 *
 * @param {Function} cb
 */
const subscribeTokenRefresh = (cb: any) => {
  refreshSubscribers.push(cb);
};

/**
 * Sets token to all pending request stored in array.
 *
 * @param {String} token
 */
const onRefreshed = (token: string) => {
  refreshSubscribers.map((cb) => cb(token));
};

ApiInstance.interceptors.response.use(
  (response) => response,

  (error) => {
    try {
      const {
        response: { status },
      } = error;

      if (Number(status) === CODE_EXPIRED_TOKEN) {
        return;
        // return handleExpiredToken(error);
        const token = storeVanilla.getState().account.token;
        if (Boolean(token)) {
          storeVanilla.setState({ account: initAccountState, app: initAppState });
          Alert.alert('Thông báo', 'Hết phiên đăng nhập. Vui lòng đăng nhập lại');
        }
      }

      return error;
    } catch (err) {
      return error;
    }
  },
);

/**
 * Handles 401 error to refresh access token.
 *
 * @param {Object} error
 */
const handleExpiredToken = async (error: any) => {
  const pendingRequest = error.config;

  if (!isRefreshing) {
    try {
      isRefreshing = true;
      // this method fetches the new token
      await refreshAccessToken()
        .then((res: any) => {
          isRefreshing = false;
          if (res.data && res?.data?.status) {
            const { data } = res;
            onRefreshed(data?.data);
            // store.dispatch(actSaveLoggerUser({ access_token: data?.data, refresh_token: null }));
            refreshSubscribers.length = 0;
          } else {
            return handleErrorRefreshToken();
          }
        })
        .catch(() => {
          handleErrorRefreshToken();
          isRefreshing = false;
          return;
        });
    } catch (error) {
      return handleErrorRefreshToken();
    }
  }

  const retryPendingRequest = new Promise((resolve) => {
    subscribeTokenRefresh((token: string) => {
      // replace the expired token and retry
      pendingRequest.headers.authorization = `Bearer ${token}`;
      resolve(ApiInstance(pendingRequest));
    });
  });

  return retryPendingRequest;
};

const handleErrorRefreshToken = async () => {
  AsyncStorage.getItem('auth').then((value) => {
    if (value) {
      const token = JSON.parse(value)?.token;
      if (Boolean(token)) {
        // const { handleLogout } = useAuthActions();
        Alert.alert('Thông báo', 'Hết phiên đăng nhập. Vui lòng đăng nhập lại');
      }
    }
  });

  refreshSubscribers.length = 0;
};

const refreshAccessToken = () => {
  return new Promise(async (resolve, reject) => {
    try {
    } catch (error) {
      return reject(error);
    }
  });
};
export const API = ApiInstance;

export const setHeader = (token: string | null) => {
  if (!token) return;

  return { headers: { Authorization: `Bearer ${token}` } };
};

interface IError {
  code?: number;
  message?: string;
}
export const handleResponse = (response: any) => {
  console.log('🚀 handleResponse url >>>', response.config.url, response);

  let res;
  let err: IError = {};

  if (response?.status === CODE_SUCCESS && (response?.data?.status === 'OK' || response?.data?.status === true)) {
    res = response?.data?.data || response?.data?.message;
  } else {
    const error = {
      code: response?.response?.status || response?.status,
      message: response?.data?.data || response?.message,
    };
    err = Object.assign({}, error);
  }
  return { res, err, isError: !!size(err) };
};
