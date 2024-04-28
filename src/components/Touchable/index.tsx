import React from 'react';
import isEqual from 'react-fast-compare';
import { TouchableProps } from './Touchable.props';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { scale, vScale, checkType, enhance } from '@src/utils';

const TouchableComponent = (props: TouchableProps) => {
  const {
    style: styleOverride = {},
    flex,
    w,
    h,
    mg,
    onPress,
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
    ...rest
  } = props;

  const styleComponent = React.useMemo(
    () =>
      enhance([
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
        enhance([styleOverride]),
      ]),
    [props],
  );

  return (
    <TouchableOpacity style={styleComponent} activeOpacity={0.7} onPress={onPress} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export const Touchable = React.memo(TouchableComponent, (prevProps, nextProps) => isEqual(prevProps, nextProps));
