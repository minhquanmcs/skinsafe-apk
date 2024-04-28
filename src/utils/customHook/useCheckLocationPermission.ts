import { useEffect, useState } from 'react';
import { checkMultiple, PERMISSIONS } from 'react-native-permissions';

export const useCheckLocationPermission = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const settings = await checkMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        PERMISSIONS.IOS.LOCATION_ALWAYS,
      ]);
      console.log('🚀 ~ file: useCheckLocationPermission.ts:18 ~ checkPermission ~ settings', settings);

      // if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      //   setIsAuthorized(true);
      // } else {
      //   setIsAuthorized(false);
      // }
    } catch (error) {
      setIsAuthorized(false);
    }
  };

  return isAuthorized;
};
