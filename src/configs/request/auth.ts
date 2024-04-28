import { API, OTPParams, LoginParams, ActivePhoneParams, CreatePasswordParams } from '@configs';

// auth
export const requestLogin = (params: LoginParams) => {
  return API.post('/login', params);
};

export const requestLogout = () => {
  return API.post('/logout', {});
};

export const requestRemoveUser = () => {
  return API.post('/delete', {});
};

export const requestCreatePassword = (params: CreatePasswordParams) => {
  return API.post('/createPassword', params);
};

export const requestActivePhone = (params: ActivePhoneParams) => {
  return API.post('/activePhone', params);
};
export const requestCheckExistPhone = (params: OTPParams) => {
  return API.post('/checkPhone', params);
};
export const requestRefreshToken = (params: OTPParams) => {
  return API.post('/refreshToken', params);
};

export const requestEnterPhone = (params: OTPParams) => {
  return API.post('/enterPhone', params);
};
