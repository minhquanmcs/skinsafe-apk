import React, { useMemo } from 'react';
import isEqual from 'react-fast-compare';
import { Text as RNText, StyleSheet } from 'react-native';

import { TextProps } from './Text.props';
import { Colors, Fonts, FontSize } from '@themes';
import { enhance, scale, vScale } from '@utils';

const TextComponent = (props: TextProps) => {
  const {
    text,
    flex,
    wrap,
    txOptions,
    children,
    size = 'size14',
    fWeight = '400',
    color = 'TEXT',
    mg,
    mgTop,
    mgLeft,
    mgRight,
    mgBottom,
    mgVertical,
    mgHorizontal,
    pd,
    pdTop,
    pdLeft,
    pdRight,
    pdBottom,
    pdHorizontal,
    pdVertical,
    w,
    h,
    center,
    alignItems,
    alignSelf,
    textAlignVertical,
    textTransform,
    textAlign,
    fFamily,
    style: styleOverride = {},
    ...rest
  } = props;

  const content = text || children;

  const styleComponent = useMemo(
    () =>
      enhance([
        flex && styles.flex,
        wrap && styles.wrap,
        mg && { margin: scale(mg) },
        pd && { padding: scale(pd) },
        mgTop && { marginTop: vScale(mgTop) },
        mgLeft && { marginLeft: scale(mgLeft) },
        mgRight && { marginRight: scale(mgRight) },
        mgBottom && { marginBottom: vScale(mgBottom) },
        mgVertical && { marginVertical: vScale(mgVertical) },
        mgHorizontal && { marginHorizontal: scale(mgHorizontal) },
        pdTop && { paddingTop: vScale(pdTop) },
        pdLeft && { paddingLeft: scale(pdLeft) },
        pdRight && { paddingRight: scale(pdRight) },
        pdBottom && { paddingBottom: vScale(pdBottom) },
        pdVertical && { paddingVertical: vScale(pdVertical) },
        pdHorizontal && { paddingHorizontal: scale(pdHorizontal) },
        color && { color: Colors[color] },
        textAlign && { textAlign },
        alignSelf && { alignSelf },
        alignItems && { alignItems },
        center && { textAlign: 'center' },
        textTransform && { textTransform },
        fWeight && { fontWeight: fWeight },
        size && { fontSize: FontSize[size] },
        fFamily && { fontFamily: Fonts[fFamily] },
        textAlignVertical && { textAlignVertical },
        w && { width: w },
        h && { height: h },
        enhance([styleOverride]),
      ]),
    [props],
  );

  return (
    <RNText allowFontScaling={false} {...rest} style={styleComponent}>
      {content}
    </RNText>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap: {
    flexWrap: 'wrap',
    flex: 1,
  },
});

export const Text = React.memo(TextComponent, (prevProps, nextProps) => isEqual(prevProps, nextProps));
