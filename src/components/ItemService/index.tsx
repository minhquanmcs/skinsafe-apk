import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@navigation';
import { Colors } from '@themes';
import { formatMoney, moderateScale, scale, vScale, device } from '@utils';
import { translate } from '@assets';
import { Text, Block, Touchable, ImageRemote } from '@components';

interface IItemServiceProps {
  data: any;
}

const MOCK_DATA = {
  image: 'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/05/6983a845-image.jpeg',
  name: 'Tỉa lông cho chó',
  price: '200000',
  duration: '15 ~ 20p',
};

const ItemServiceComponent: React.FC<IItemServiceProps> = (props) => {
  const data = MOCK_DATA;
  const img = [1, 2, 3, 4];
  const navigation = useNavigation<any>();
  const pressOrder = () => {};
  const pressDetail = () => {
    navigation.navigate(SCREENS.DETAIL_SERVICE);
  };

  return (
    <Block style={styles.wrapper}>
      <Block direction="row" align="center" justify="space-between">
        <Block style={styles.coverAvatar}>
          <ImageRemote source={data?.image} style={styles.avatar} resizeMode="cover" />
        </Block>
        <Block>
          <Text fFamily="MEDIUM" size="size12" color="COLOR_1" fWeight="700" text={data?.name} />
          <Text
            fFamily="MEDIUM"
            size="size14"
            color="TEXT"
            fWeight="700"
            mgTop={2}
            text={formatMoney(data.price) + ' đ'}
          />
          <Text fFamily="MEDIUM" size="size12" color="COLOR_3" fWeight="700" mgTop={2} text={data?.duration} />
        </Block>
        <Block>
          <Touchable style={styles.coverBtn} bgColor={Colors.COLOR_1} onPress={pressOrder}>
            <Text fFamily="MEDIUM" size="size10" color="WHITE" fWeight="500" text={translate('shop_page.order')} />
          </Touchable>
          <Touchable style={styles.coverBtn} bgColor={Colors.COLOR_6} mgTop={9} onPress={pressDetail}>
            <Text fFamily="MEDIUM" size="size10" color="WHITE" fWeight="500" text={translate('shop_page.detail')} />
          </Touchable>
        </Block>
      </Block>
      <Block direction="row" mgTop={23}>
        {img.map((e, i) => {
          const isLastItem = i === img.length - 1;
          return (
            <Touchable style={styles.imgBox} key={i}>
              <ImageRemote style={styles.img} source={'https://picsum.photos/801'} key={i} resizeMode={'cover'} />
              {isLastItem && (
                <Block style={styles.moreBox}>
                  <Text fWeight="600" size={'size18'} color={'COLOR_4'}>
                    +30
                  </Text>
                </Block>
              )}
            </Touchable>
          );
        })}
      </Block>
    </Block>
  );
};

export const ItemService = memo(ItemServiceComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    padding: scale(3),
    width: '100%',
    borderColor: '#D0D0D0',
    borderWidth: moderateScale(0.6),
    backgroundColor: '#F1F1F1',
    borderRadius: moderateScale(4),
    paddingHorizontal: vScale(11),
    paddingVertical: scale(15),
  },
  avatar: {
    width: scale(50),
    height: vScale(50),
    borderRadius: moderateScale(50),
  },
  coverAvatar: {
    width: scale(52),
    height: vScale(52),
    borderRadius: moderateScale(52),
    borderColor: Colors.COLOR_1,
    borderWidth: moderateScale(1),
    borderStyle: 'dashed',
  },
  image: {
    width: '100%',
    height: vScale(99),
    borderRadius: moderateScale(8),
  },
  coverBtn: {
    width: scale(77),
    height: vScale(21),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBox: {
    width: scale(75),
    height: vScale(75),
    borderRadius: moderateScale(6),
    marginRight: (device.width - scale(8 * 2) - scale(15 * 2) - scale(4 * 75)) / 3,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: moderateScale(6),
  },
  moreBox: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
    backgroundColor: 'rgba(49, 49, 49, .7)',
  },
});
