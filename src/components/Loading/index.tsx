import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { Block } from '../Block';
import { Colors, ColorsType } from '@themes';
import { moderateScale, scale } from '@utils';

interface LoadingProps {
  size?: 'small' | 'large' | undefined;
  color?: ColorsType;
  flex?: any;
}

const LoadingComponent = (props: LoadingProps) => {
  const { size = 'large', color = 'COLOR_1' } = props;

  return (
    <Block style={styles.wrapper}>
      <Block style={styles.container}>
        <ActivityIndicator size={size} color={Colors[color]} />
      </Block>
    </Block>
  );
};

export const Loading = memo(LoadingComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: scale(40),
    backgroundColor: Colors.COLOR_9,
    borderRadius: moderateScale(16),
  },
});
