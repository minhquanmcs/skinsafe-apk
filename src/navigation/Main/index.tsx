import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import * as Screens from '@screens';
import { translate } from '@assets';
import { SCREENS } from '../screens.name';
import { CustomTabBar } from './CustomTabBar';
import { useAppStore } from '@store';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: '#E30613',
  tabBarInactiveTintColor: '#67686C',
  unmountOnBlur: true,
};
const Stack = createStackNavigator();
const stackScreenOptions = { headerShown: false, gestureEnabled: true, ...TransitionPresets.SlideFromRightIOS };

const MainStackComponent = () => {
  const role = useAppStore((state) => state?.account?.user?.role);
  console.log('role111', role);
  if (!role || role === 'customer' || role === 'guest') {
    return (
      <Tab.Navigator
        initialRouteName={SCREENS.MAP}
        screenOptions={screenOptions}
        tabBar={(e) => <CustomTabBar {...e} />}>
        <Tab.Screen
          name={SCREENS.PRODUCT}
          component={Screens.ProductScreen}
          options={{
            tabBarLabel: 'Sản phẩm',
          }}
        />
        <Tab.Screen
          name={SCREENS.VOUCHER}
          component={Screens.VoucherScreen}
          options={{
            tabBarLabel: 'Ưu đãi',
          }}
        />
        <Tab.Screen
          name={SCREENS.MAP}
          component={Screens.MapScreen}
          options={{
            tabBarLabel: 'Bản đồ',
          }}
        />
        <Tab.Screen
          name={SCREENS.ORDER}
          component={Screens.OrderScreen}
          options={{
            tabBarLabel: 'Đơn hàng',
          }}
        />
        <Tab.Screen
          name={SCREENS.PROFILE_STACK}
          component={ProfileStack}
          options={{
            tabBarLabel: 'Cá nhân',
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <Tab.Navigator
        initialRouteName={SCREENS.PRODUCT}
        screenOptions={screenOptions}
        tabBar={(e) => <CustomTabBar {...e} />}>
        <Tab.Screen
          name={SCREENS.PRODUCT}
          component={Screens.StatisticScreen}
          options={{
            tabBarLabel: 'Thống kê',
          }}
        />
        <Tab.Screen
          name={SCREENS.VOUCHER}
          component={Screens.AgencyScreen}
          options={{
            tabBarLabel: 'Đại lý',
          }}
        />
        <Tab.Screen
          name={SCREENS.MAP}
          component={Screens.DeviceScreen}
          options={{
            tabBarLabel: 'Thiết bị',
          }}
        />
        {/* <Tab.Screen
          name={SCREENS.ORDER}
          component={Screens.OrderScreen}
          options={{
            tabBarLabel: 'Đơn hàng',
          }}
        /> */}
        <Tab.Screen
          name={'ManagerProfileStack'}
          component={ManagerProfileStack}
          options={{
            tabBarLabel: 'Cá nhân',
          }}
        />
      </Tab.Navigator>
    );
  }
};

export const MainStack = memo(MainStackComponent, isEqual);

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={SCREENS.HOME} component={Screens.HomeScreen} />
      <Stack.Screen name={SCREENS.SEARCH} component={Screens.SearchScreen} />
      <Stack.Screen name={SCREENS.UTILITIES_MEDICAL} component={Screens.UtilitiesMedicalScreen} />
      <Stack.Screen name={SCREENS.PROFILE_MEDICAL} component={Screens.ProfileMedicalScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={SCREENS.PROFILE} component={Screens.ProfileScreen} />
      <Stack.Screen name={SCREENS.CHANGE_PASSWORD} component={Screens.ChangePasswordScreen} />
      <Stack.Screen
        name={SCREENS.SUCCESS_ACTION_AUTH}
        component={Screens.SuccessActionAuthScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name={SCREENS.DETAILS_PROFILE} component={Screens.DetailsProfileScreen} />
      <Stack.Screen name={SCREENS.EDIT_PROFILE} component={Screens.EditProfileScreen} />
      <Stack.Screen name={SCREENS.MY_WALLET} component={Screens.MyWalletScreen} />
      <Stack.Screen name={SCREENS.HISTORY_TRANSACTION} component={Screens.HistoryTransactionScreen} />
      <Stack.Screen name={SCREENS.ORDER_OVERVIEW} component={Screens.OrderOverviewScreen} />
    </Stack.Navigator>
  );
};

const ManagerProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={SCREENS.MANAGER_PROFILE} component={Screens.ManagerProfileScreen} />
      <Stack.Screen name={SCREENS.DETAILS_PROFILE} component={Screens.DetailsProfileScreen} />
    </Stack.Navigator>
  );
};
