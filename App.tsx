/**
 * Smart Power app
 * by Sunny
 *
 * @author
 * KhanhTT
 * tuankhanhtran45@gmail.com
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {UIManager} from 'react-native';
import {Host} from 'react-native-portalize';
import Toast from 'react-native-toast-message';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, Alert, BackHandler} from 'react-native';

import AppContainer from '@navigation';
import {device, useHydration} from '@utils';
import {IconError, IconSuccess} from '@assets';
import {Block, ToastMessage} from '@components';

const toastConfig = {
  success: (props: any) => <ToastMessage icon={<IconSuccess />} {...props} />,
  error: (props: any) => <ToastMessage icon={<IconError />} {...props} />,
  tomatoToast: () => <Block />,
};

const App = () => {
  const isLoadingPersistApp = useHydration(); //loading get storage on device

  if (device.isAndroid) {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  useEffect(() => {
    // Back android exit app
    const backAction = () => {
      Alert.alert('Thông báo!', 'Bạn có chắc chắn muốn thoát ứng dụng?', [
        {text: 'Hủy', onPress: () => null, style: 'cancel'},
        {text: 'Đồng ý', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  if (isLoadingPersistApp) {
    return (
      <Block center>
        <ActivityIndicator />
      </Block>
    );
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Host>
          <AppContainer />
          <Toast config={toastConfig} />
        </Host>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
