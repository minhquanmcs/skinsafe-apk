import React from 'react';
import isEqual from 'react-fast-compare';
import { BlockProps } from './Block.props';
import { enhance, scale, vScale } from '@utils';
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native';

const BlockComponent = (props: BlockProps) => {
  const {
    w,
    h,
    mg,
    flex,
    center,
    bgColor,
    alignSelf,
    align,
    direction,
    justify,
    children,
    mgTop,
    mgLeft,
    mgRight,
    mgBottom,
    mgVertical,
    mgHorizontal,
    borderRadius,
    pd,
    pdTop,
    pdLeft,
    pdRight,
    pdBottom,
    pdVertical,
    pdHorizontal,
    borderColor,
    style: styleOverride = {},
    ...rest
  } = props;

  const styleComponent = React.useMemo(
    () =>
      enhance([
        [
          flex && styles.flex,
          mg && { margin: scale(mg) },
          pd && { padding: scale(pd) },
          mgTop && { marginTop: vScale(mgTop) },
          mgLeft && { marginLeft: scale(mgLeft) },
          mgRight && { marginRight: scale(mgRight) },
          mgBottom && { marginBottom: vScale(mgBottom) },
          mgVertical && { marginVertical: vScale(mgVertical) },
          borderRadius && { borderRadius: scale(borderRadius) },
          mgHorizontal && { marginHorizontal: scale(mgHorizontal) },
          pdTop && { paddingTop: vScale(pdTop) },
          pdLeft && { paddingLeft: scale(pdLeft) },
          pdRight && { paddingRight: scale(pdRight) },
          pdBottom && { paddingBottom: vScale(pdBottom) },
          pdVertical && { paddingVertical: vScale(pdVertical) },
          pdHorizontal && { paddingHorizontal: scale(pdHorizontal) },
          alignSelf && { alignSelf },
          align && { alignItems: align },
          justify && { justifyContent: justify },
          bgColor && { backgroundColor: bgColor },
          direction && { flexDirection: direction },
          w && { width: w },
          h && { height: h },
          center && { justifyContent: 'center', alignItems: 'center' },
          borderColor && { borderColor },
          enhance([styleOverride]),
        ] as StyleProp<ViewStyle>,
      ]),
    [props],
  );

  return (
    <View style={styleComponent} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const Block = React.memo(BlockComponent, (prevProps, nextProps) => isEqual(prevProps, nextProps));
