import React, { useEffect, useState } from 'react';
import Geolocation, { GeolocationConfiguration } from '@react-native-community/geolocation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SCREENS } from './screens.name';
import { Block } from '@components';
import { CareProviderStack } from './Care_Provider';
export * from './screens.name';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
};

const config: GeolocationConfiguration = {
  skipPermissionRequests: true,
  authorizationLevel: 'auto',
  locationProvider: 'android',
};
const AppContainer = () => {
  const [isDownload, setDownload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  useEffect(() => {
    Geolocation.setRNConfiguration(config);
  }, []);
  return (
    <Block flex>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name={SCREENS.CARE_STACK} component={CareProviderStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Block>
  );
};

export default AppContainer;
