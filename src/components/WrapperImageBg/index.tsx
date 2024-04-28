import isEqual from 'react-fast-compare';
import React, { memo, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ImageBackground, ImageBackgroundProps, StyleSheet, ImageSourcePropType } from 'react-native';

import { Block } from '../Block';
import { enhance, scale } from '@utils';
import { Touchable } from '../Touchable';
import { IconArrowLeft, images } from '@assets';
import { SafeWrapper } from '../SafeWrapper';

interface IWrapperImageBgProps extends Omit<ImageBackgroundProps, 'source'> {
  enabledGoBack?: boolean;
  source?: ImageSourcePropType;
}

const WrapperImageBgComponent: React.FC<IWrapperImageBgProps> = (props) => {
  const { children, source = images.background_triangular, enabledGoBack = true, style, ...rest } = props;

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const styleWrapper = useMemo(() => enhance([styles.wrapper, { paddingTop: insets.top }, style]), [style]);

  const onPressBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    // <SafeWrapper bgColor={'HEADER_BG'}>
    <ImageBackground source={source} style={styleWrapper} imageStyle={styles.img} {...rest} resizeMode="cover">
      {enabledGoBack ? (
        <Touchable onPress={onPressBack} style={styles.backBtn}>
          <IconArrowLeft />
        </Touchable>
      ) : (
        <Block />
      )}
      {children}
    </ImageBackground>
    // </SafeWrapper>
  );
};

export const WrapperImageBg = memo(WrapperImageBgComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  },
  backBtn: {
    width: scale(38),
    height: scale(38),
    alignItems: 'center',
    marginLeft: scale(15),
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  img: { width: scale(700), height: scale(700), marginLeft: -20 },
});
