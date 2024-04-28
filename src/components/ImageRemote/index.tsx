import isEqual from 'react-fast-compare';
import React, { memo, useState } from 'react';
import FastImage from 'react-native-fast-image';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

import { Block } from '../Block';
import { Image } from '../Image';

interface ImageRemoteProps {
  /**
   * (Required) Url of image or local Image
   */
  source: string;

  children?: React.ReactNode;

  /**
   * @default contain
   */
  resizeMode?: keyof typeof FastImage.resizeMode;

  /**
   * Image style
   */
  style?: any;

  /**
   * Overwrite wrap image style

   */
  containerStyle?: StyleProp<ViewStyle>;

  sizeIcon?: number;
}

const ImageRemoteComponent = (props: ImageRemoteProps) => {
  const { source, children, containerStyle, resizeMode = 'contain', style, sizeIcon = 30, ...rest } = props;

  const [loading, setLoading] = useState(true);

  const onLoad = () => setLoading(false);
  const onError = () => setLoading(true);

  return (
    <View style={containerStyle}>
      {loading && (
        <Block style={[style, styles.placeholder]} bgColor={'#F4F5F6'} center>
          <Image source={'imgUpload'} style={{ width: sizeIcon, height: sizeIcon }} />
        </Block>
      )}
      {source ? (
        <FastImage
          style={style}
          onLoad={onLoad}
          onError={onError}
          resizeMode={resizeMode}
          source={{ uri: source }}
          {...rest}
        />
      ) : (
        <Block style={[style]} bgColor={'#F4F5F6'} center>
          <Image source={'imgUpload'} style={{ width: sizeIcon, height: sizeIcon }} />
        </Block>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export const ImageRemote = memo(ImageRemoteComponent, (prevProps, nextProps) => isEqual(prevProps, nextProps));
