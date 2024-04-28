import { Dimensions, Platform, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('window');

const PLATFORM = {
  IOS: 'ios',
  WEB: 'web',
  ANDROID: 'android',
  MATERIAL: 'material',
};

const platform = Platform.OS;
const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const isIphoneX = platform === PLATFORM.IOS && (height === 812 || width === 812 || height === 896 || width === 896);

const sttBarHeight = Platform.select({
  ios: isIphoneX ? 44 : 20,
  android: StatusBar.currentHeight,
});

export const device = {
  height,
  width,
  platform,
  PLATFORM,
  isIos,
  isAndroid,
  isIphoneX,
  sttBarHeight,
};
