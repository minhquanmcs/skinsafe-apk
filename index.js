/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'Remote debugger is in a background tab',
  'LogBox.js:173 Sending `onAnimatedValueUpdate` with no listeners registered.',
  'Required dispatch_sync to load constants for RNGestureHandlerModule.',
  'LogBox.js:173 RCTBridge required dispatch_sync to load RNGestureHandlerModule.',
  'Sending `onAnimatedValueUpdate` with no listeners registered.',
  'Non-serializable values were found in the navigation state',
  'ViewPropTypes will be removed from React Native',
]);

AppRegistry.registerComponent(appName, () => App);
