import { useEffect, useState } from 'react';

export const useCheckNotificationPermission = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
    } catch (error) {
      setIsAuthorized(false);
    }
  };

  return isAuthorized;
};
