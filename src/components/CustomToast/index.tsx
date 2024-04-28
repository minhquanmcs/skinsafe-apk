import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../Text';
import { Block } from '../Block';
import { Colors, FontSize } from '@themes';
import { moderateScale, scale, vScale } from '@utils';

interface IToastMessageProps {
  text1: string;
  icon: React.ReactElement;
}

const ToastMessageComponent: React.FC<IToastMessageProps> = (props) => {
  const { text1, icon } = props;

  const insets = useSafeAreaInsets();

  return (
    <Block style={[styles.container, { marginTop: insets.top + 12 }]}>
      {icon}
      {text1 ? <Text style={styles.title}>{text1}</Text> : null}
    </Block>
  );
};

export const ToastMessage = memo(ToastMessageComponent, isEqual);

const styles = StyleSheet.create({
  container: {
    width: scale(275),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: vScale(16),
    paddingHorizontal: scale(16),
    borderRadius: moderateScale(4),
    backgroundColor: Colors.COLOR_4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    flex: 1,
    fontWeight: '500',
    marginLeft: vScale(16),
    fontSize: FontSize.size15,
    lineHeight: moderateScale(20),
  },
});
