import { checkMultiple, openSettings, PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { device } from '../device';

const PERMISSIONS_DEVICES = device.isIos
  ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
  : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION];

export const checkPermissionLocation = async (isRequest: boolean = false) => {
  return new Promise(async (resolve, reject) => {
    try {
      const permissions = await checkMultiple(PERMISSIONS_DEVICES);
      for (const permission of Object.values(permissions)) {
        if (permission === 'granted') {
          return resolve(true);
        } else {
          if (isRequest) {
            const res = await requestMultiple(PERMISSIONS_DEVICES);
            for (const permission of Object.values(res)) {
              if (permission === 'granted') {
                return resolve(true);
              }
              if (permission === 'blocked') {
                openSettings();
              }
              return resolve(false);
            }
          }
          return resolve(false);
        }
      }
    } catch (error) {
      return resolve(false);
    }
  });
};

export const requestPermissionLocation = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await requestMultiple(PERMISSIONS_DEVICES);
      return resolve(true);
    } catch (error) {
      return reject(false);
    }
  });
};
