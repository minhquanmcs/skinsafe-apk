import React from 'react';
import isEqual from 'react-fast-compare';
import { Image as RNImage, View, ImageResizeMode, StyleProp, ImageStyle, ViewStyle } from 'react-native';

import { images, ImagesTypes } from '@assets';

interface ImageProps {
  /**
   * (Required) Source image(local)
   */
  source: ImagesTypes;

  resizeMode?: ImageResizeMode;

  /**
   * Image style
   * @default undefined
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Overwrite wrap image style
   * @default undefined
   */
  containerStyle?: StyleProp<ViewStyle>;
}

const ImageComponent = (props: ImageProps) => {
  const { source, style = {}, containerStyle, resizeMode = 'contain', ...rest } = props;

  return (
    <View style={containerStyle}>
      <RNImage source={images[source]} style={style} resizeMode={resizeMode} {...rest} />
    </View>
  );
};

export const Image = React.memo(ImageComponent, (prevProps, nextProps) => isEqual(prevProps, nextProps));
