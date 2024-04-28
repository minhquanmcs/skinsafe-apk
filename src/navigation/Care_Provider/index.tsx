import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { SCREENS } from '@navigation';
import { DetailsCareScreen, HomeCareScreen, ListCareScreen, LoginScreen } from '@screens';

const Stack = createStackNavigator();
const screenOptions = { headerShown: false, gestureEnabled: true, ...TransitionPresets.SlideFromRightIOS };

export const CareProviderStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={SCREENS.HOME_CARE} component={HomeCareScreen} />
      <Stack.Screen name={SCREENS.LIST_CARE} component={ListCareScreen} />
      <Stack.Screen name={SCREENS.DETAIL_CARE} component={DetailsCareScreen} />
    </Stack.Navigator>
  );
};
