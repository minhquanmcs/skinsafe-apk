import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useNavigation } from '@react-navigation/native';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { SCREENS } from '@navigation';
import { Colors, FontSize } from '@themes';
import { IconChat3, IconFreeShip, IconLocation, translate } from '@assets';
import { Text, Block, Touchable, ImageRemote, StarRate } from '@components';
import { convertQuantityToText, currencyFormat, moderateScale, scale, vScale } from '@utils';

interface IItemProductProps {
  data: any;
  showAddCart?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ItemProductComponent: React.FC<IItemProductProps> = (props) => {
  const { data, showAddCart = false, style } = props;
  const navigation = useNavigation<any>();

  const onPressDetail = () => navigation.push(SCREENS.DETAIL_PRODUCT, { data });

  return (
    <Touchable style={[styles.wrapper, style]} onPress={onPressDetail}>
      <Block style={styles.imageBox}>
        <ImageRemote source={data.avatar} style={styles.image} />
        {data?.qty_sell ? (
          <Block style={styles.soldBox}>
            <Text style={styles.soldText}>
              {translate('item_product.sold')} {convertQuantityToText(data?.qty_sell)}
            </Text>
          </Block>
        ) : null}
        {data?.percentage_sale ? (
          <Block style={styles.discountBox}>
            <Text style={styles.discount}>{data?.percentage_sale}%</Text>
          </Block>
        ) : null}
      </Block>

      <Text style={styles.name} numberOfLines={2}>
        {data?.product_detail?.title}
      </Text>

      <Block direction="row" align="flex-end" mgTop={5}>
        {data?.rating_avg ? (
          <Block style={styles.ratingBox}>
            <StarRate rate={data?.rating_avg} size={5.71} />
            <Text style={styles.ratingText}>(102)</Text>
          </Block>
        ) : null}
        <Block style={styles.ratingBox} mgLeft={5}>
          <IconChat3 />
          <Text style={styles.countComment}>14</Text>
        </Block>
      </Block>

      <Block direction="row" mgTop={1} justify={'space-between'}>
        <Text style={styles.price}>{currencyFormat(data?.price_sale || data?.price_regular)}</Text>
      </Block>

      <Block direction="row" justify={'space-between'} mgTop={1}>
        {data?.shop?.province?.name ? (
          <Block direction="row" flex pdRight={20}>
            <IconLocation />
            <Text style={styles.fromText}>{data?.shop?.province?.name}</Text>
          </Block>
        ) : null}
        <IconFreeShip />
      </Block>

      {showAddCart && (
        <Touchable style={styles.addCartBtn}>
          <Text style={styles.textAddCart}>{translate('item_product.add_to_cart')}</Text>
        </Touchable>
      )}
    </Touchable>
  );
};

export const ItemProduct = memo(ItemProductComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    padding: scale(3),
    width: scale(105),
    borderColor: '#D0D0D0',
    borderWidth: moderateScale(0.5),
    backgroundColor: Colors.COLOR_4,
    borderRadius: moderateScale(10),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(8),
  },
  name: {
    fontWeight: '500',
    color: Colors.TEXT,
    marginTop: vScale(5),
    fontSize: FontSize.size10,
    lineHeight: moderateScale(12.21),
  },
  soldText: {
    color: Colors.COLOR_4,
    fontSize: FontSize.size7,
    lineHeight: moderateScale(8.35),
  },
  price: {
    color: Colors.BLACK,
    fontSize: FontSize.size10,
  },
  discountBox: {
    left: 0,
    bottom: 0,
    position: 'absolute',
    paddingVertical: scale(2),
    paddingHorizontal: scale(4),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.COLOR_2,
  },
  discount: {
    color: Colors.COLOR_4,
    fontSize: FontSize.size9,
    lineHeight: moderateScale(10.74),
  },
  cartBox: {
    width: scale(14),
    height: scale(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.COLOR_16,
    borderRadius: moderateScale(14),
    borderWidth: moderateScale(0.6),
  },
  fromText: {
    fontWeight: '500',
    color: Colors.BLACK,
    marginLeft: scale(2),
    fontSize: FontSize.size7,
  },
  addCartBtn: {
    alignItems: 'center',
    marginTop: vScale(6),
    justifyContent: 'center',
    paddingVertical: vScale(1.5),
    borderRadius: moderateScale(6),
    backgroundColor: Colors.COLOR_1,
  },
  textAddCart: {
    color: Colors.WHITE,
    fontSize: FontSize.size10,
    lineHeight: moderateScale(18),
  },
  imageBox: {
    width: '100%',
    height: vScale(99),
    borderRadius: moderateScale(8),
  },
  soldBox: {
    top: 2,
    right: 3,
    position: 'absolute',
    paddingVertical: vScale(1),
    paddingHorizontal: scale(3),
    borderRadius: moderateScale(2),
    backgroundColor: Colors.COLOR_1,
  },
  ratingBox: {
    padding: scale(2),
    flexDirection: 'row',
    borderRadius: moderateScale(9),
    backgroundColor: Colors.COLOR_8,
  },
  ratingText: {
    fontWeight: '500',
    color: Colors.COLOR_2,
    fontSize: FontSize.size6,
    lineHeight: moderateScale(7.33),
  },
  countComment: {
    fontSize: FontSize.size6,
    lineHeight: moderateScale(7.33),
  },
});
