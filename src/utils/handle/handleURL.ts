import { Linking, Platform } from 'react-native';

export const openUrl = (url: string) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (!supported) return;

      return Linking.openURL(url);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const openMapDirection = (lat: string, lng: string, label?: string) => {
  if (!lat || !lng) return;
  const url: any = Platform.select({
    ios: `comgooglemaps://?center=${lat},${lng}&q=${lat},${lng}&zoom=14&views=traffic(${label})"`,
    android: `geo://?q=${lat},${lng}(${label})`,
  });
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        return Linking.openURL(url);
      } else {
        const browser_url = `https://www.google.de/maps/@${lat},${lng}`;
        return Linking.openURL(browser_url);
      }
    })
    .catch(() => {
      if (Platform.OS === 'ios') {
        Linking.openURL(`maps://?q=${lat},${lng}`);
      }
    });
};
