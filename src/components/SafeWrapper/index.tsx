import isEqual from 'react-fast-compare';
import React, { memo, useMemo } from 'react';
import SafeAreaView, { ForceInsetProp } from 'react-native-safe-area-view';
import { StyleSheet, ViewProps, SafeAreaView as RNSafeAreaView } from 'react-native';

import { Block } from '../Block';
import { device, enhance } from '@utils';
import { Colors, ColorsType } from '@themes';
import { FocusAwareStatusBar } from '../FocusAwareStatusBar';

interface Props extends ViewProps {
  bgColor?: ColorsType;
  forceInset?: ForceInsetProp;
}
const Safe = device.isIos ? RNSafeAreaView : SafeAreaView;

const SafeComponent = ({ children, style, bgColor, ...rest }: Props) => {
  const styleWrapper = useMemo(() => {
    return enhance([styles.wrapper, bgColor && { backgroundColor: Colors[bgColor] }]);
  }, [style, bgColor]);

  return (
    <React.Fragment>
      <Safe style={styleWrapper} {...rest}>
        <FocusAwareStatusBar backgroundColor={bgColor ? Colors[bgColor] : Colors.COLOR_4} />
        <Block style={styles.container}>{children}</Block>
      </Safe>
      <Safe style={{ flex: 0, backgroundColor: Colors.WHITE }} />
    </React.Fragment>
  );
};

export const SafeWrapper = memo(SafeComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.COLOR_4,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_4,
  },
});
