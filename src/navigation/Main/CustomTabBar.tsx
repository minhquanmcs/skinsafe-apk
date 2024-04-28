import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scale, vScale } from '@utils';
import { Image, Text } from '@components';
import { Colors, FontSize } from '@themes';
const CustomTabBarComponent: React.FC<any> = (props) => {
  const bottom = useSafeAreaInsets().bottom;

  const { state, descriptors, navigation } = props;

  return (
    <View style={styles.wrapper}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const tabBarActiveTintColor = options.tabBarActiveTintColor;
        const tabBarInactiveTintColor = options.tabBarInactiveTintColor;

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        console.log('label', label);
        const Img =
          label === 'Thống kê'
            ? 'icStatistic'
            : label === 'Đại lý'
            ? 'icAgency'
            : label === 'Thiết bị'
            ? 'icDevice'
            : label === 'Cá nhân'
            ? 'icUser'
            : index === 0
            ? 'icProduct'
            : index === 1
            ? 'icGift'
            : index === 2
            ? 'icMap'
            : index === 3
            ? 'icCart'
            : index === 4
            ? 'icUser'
            : null;
        const color = isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor;
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole={'button'}
            testID={options.tabBarTestID}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityState={isFocused ? { selected: true } : {}}
            style={[styles.btn, { height: vScale(bottom > 0 ? 49 : 71) + bottom }]}>
            <>
              {Img && <Image source={Img} style={[styles.img, { tintColor: color }]} />}
              <Text style={[styles.label, { color }]}>{label}</Text>
            </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const CustomTabBar = memo(CustomTabBarComponent, isEqual);

const styles = StyleSheet.create({
  img: { width: vScale(20), height: scale(20) },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingTop: vScale(12),
    backgroundColor: 'white',
  },
  label: {
    fontWeight: '500',
    marginTop: vScale(6),
    fontSize: FontSize.size10,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: Colors.COLOR_4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
