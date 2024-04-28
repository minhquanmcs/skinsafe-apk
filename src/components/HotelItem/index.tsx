import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';

import { Colors } from '@themes';
import { SCREENS } from '@navigation';
import { moderateScale, scale, vScale } from '@utils';
import { IconHospital, IconLocation, IconVoucher2 } from '@assets';
import { Block, Image, ImageRemote, StarRate, Text, Touchable } from '@components';

interface IHotelItemProps {
  data: any;
  type: string;
  navigation: any;
}

const HotelItemComponent: React.FC<IHotelItemProps> = (props) => {
  const { data, navigation, type } = props;

  const onPressDetail = () => {
    return navigation.navigate(SCREENS.DETAIL_HOTEL_AND_SPA, { data, type });
  };

  return (
    <Touchable style={styles.wrapper} onPress={onPressDetail}>
      <Block>
        <ImageRemote source="https://picsum.photos/801" style={styles.avatar} resizeMode="cover" />
        <Block direction="row" center mgTop={13}>
          <StarRate rate={4} />
          <Text fWeight="700" size="size10" color="COLOR_2">
            (100)
          </Text>
        </Block>
      </Block>

      <Block flex justify="center" pdLeft={12}>
        <Block direction="row" align="center">
          <Block style={styles.iconBox}>
            <IconHospital />
          </Block>
          <Block flex>
            <Block direction="row">
              <Text fWeight="700" flex numberOfLines={1}>
                day laf ten shop dai vclas jkdkalsjd
              </Text>
              <Block direction="row" align="center" mgLeft={8}>
                <IconLocation />
                <Text mgLeft={2} color={'COLOR_1'}>
                  0.2<Text> km</Text>
                </Text>
              </Block>
            </Block>
            <Text mgTop={3} fWeight="500" size="size12">
              Giá từ:{' '}
              <Text fWeight="500" size="size12" color="COLOR_1">
                80.000đ - 200.000đ
              </Text>
            </Text>
          </Block>
        </Block>

        <Block direction="row" align="center" mgTop={14}>
          <Block style={styles.iconBox}>
            <Image source="ic_location_pet" style={styles.imgLocation} />
          </Block>
          <Text fWeight="700" numberOfLines={2} flex>
            Số 1 A nguyễn văn trỗi, Hà Đông Hà Nội
          </Text>
        </Block>

        <Block mgTop={14} direction="row" align="center">
          <Block style={styles.statusDot} />
          <Text fWeight="700" mgLeft={20}>
            Còn chỗ
          </Text>
        </Block>

        <Block mgTop={14} direction="row" align="center">
          <IconVoucher2 />
          <Text fWeight="700" mgLeft={12} color="COLOR_1">
            Chương trình khuyến mãi
          </Text>
        </Block>
      </Block>
    </Touchable>
  );
};

export const HotelItem = memo(HotelItemComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: vScale(7),
    flexDirection: 'row',
    paddingLeft: scale(9),
    paddingRight: scale(14),
    paddingBottom: vScale(10),
    marginBottom: vScale(37),
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: scale(92),
    height: vScale(106),
    borderRadius: moderateScale(8),
  },
  iconBox: {
    width: scale(20),
    height: scale(20),
    alignItems: 'center',
    marginRight: scale(8),
    justifyContent: 'center',
    backgroundColor: '#FDE8E8',
    borderRadius: moderateScale(20),
  },
  imgLocation: {
    width: scale(9),
    height: vScale(13),
  },
  statusDot: {
    width: scale(12),
    height: scale(12),
    borderRadius: moderateScale(12),
    backgroundColor: Colors.COLOR_2,
  },
});
