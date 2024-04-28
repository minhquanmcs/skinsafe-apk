import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IconBell } from '@assets';
import { SCREENS } from '@navigation';
import { Colors, FontSize } from '@themes';
import { moderateScale, scale } from '@utils';
import { Text, Block, Touchable } from '@components';

interface INotificationBadgeBtnProps {}

const NotificationBadgeBtnComponent: React.FC<INotificationBadgeBtnProps> = (props) => {
  const {} = props;
  const count = 19;

  const navigation = useNavigation<any>();

  const onPressNotification = () => navigation.navigate(SCREENS.NOTIFICATION);

  return (
    <Touchable style={styles.wrapper} onPress={onPressNotification}>
      <IconBell color={Colors.COLOR_4} />
      {count && +count > 0 && (
        <Block style={styles.badgeBox}>
          <Text style={styles.badgeText}>{+count > 9 ? '9+' : count}</Text>
        </Block>
      )}
    </Touchable>
  );
};

export const NotificationBadgeBtn = memo(NotificationBadgeBtnComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    width: scale(33),
    height: scale(33),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.COLOR_9,
    borderRadius: moderateScale(100),
  },
  badgeBox: {
    top: -5,
    right: -5,
    zIndex: 11111,
    padding: scale(2),
    position: 'absolute',
    backgroundColor: '#F1B749',
    borderRadius: moderateScale(100),
  },
  badgeText: {
    fontWeight: '700',
    color: Colors.COLOR_4,
    fontSize: FontSize.size12,
  },
});
