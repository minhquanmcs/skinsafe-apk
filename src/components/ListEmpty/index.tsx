import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { ImageStyle, StyleProp, StyleSheet } from 'react-native';

import { Text } from '../Text';
import { Image } from '../Image';
import { Block } from '../Block';
import { Colors, FontSize } from '@themes';
import { ImagesTypes, translate } from '@assets';
import { checkType, moderateScale, scale, vScale } from '@utils';

interface IListEmpty {
  title?: string;
  source?: ImagesTypes;
  renderImg?: any;
  styleImg?: StyleProp<ImageStyle>;
  [x: string]: any;
}

const ListEmptyComponent = (props: IListEmpty) => {
  const { title = translate('cm.not_found'), source = 'no_search', renderImg, styleImg, ...rest } = props;

  return (
    <Block flex center pdTop={80} {...rest}>
      {renderImg && checkType(renderImg, 'function') ? (
        renderImg()
      ) : source ? (
        <Image source={source} style={[styles.img, styleImg]} />
      ) : null}
      <Text style={styles.title}>{title}</Text>
    </Block>
  );
};

export const ListEmpty = memo(ListEmptyComponent, isEqual);

const styles = StyleSheet.create({
  img: {
    width: scale(219),
    height: vScale(208),
    marginBottom: vScale(20),
  },
  title: {
    fontWeight: '500',
    color: Colors.TEXT,
    textAlign: 'center',
    fontSize: FontSize.size18,
    marginHorizontal: scale(40),
    lineHeight: moderateScale(19.1),
  },
});
