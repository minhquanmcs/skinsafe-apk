import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';

import { Colors, Fonts, FontSize } from '@themes';
import { moderateScale, scale, vScale } from '@utils';
import { Block, ImageRemote, Text, Touchable } from '@components';
import { IconArrowRight, IconGender, IconHeavy, IconRectangle, translate } from '@assets';

interface IHeaderInformationPetProps {
  pet: any;
  onPressInfo: () => void;
}
const LIST_INFO = [
  { icon: null, title: 'header_info_pet.age', content: 'age' },
  { icon: <IconGender />, title: 'header_info_pet.gender', content: 'sex' },
  { icon: <IconHeavy />, title: 'header_info_pet.heavy', content: 'weight' },
];

const HeaderInformationPetComponent: React.FC<IHeaderInformationPetProps> = (props) => {
  const { pet, onPressInfo } = props;

  return (
    <Block pdHorizontal={15} pdVertical={10}>
      <Block direction="row" align="center">
        <Block style={styles.avatarContainer}>
          <ImageRemote source={pet?.avatar} style={styles.avatar} resizeMode="cover" />
        </Block>
        <Block>
          <Text fFamily="BRANDING" color="WHITE">
            {pet?.name}
          </Text>
          <Touchable style={styles.infoBox} onPress={onPressInfo}>
            <Text size="size10" color="WHITE" mgRight={4}>
              {translate('profile_medical.info')}
            </Text>
            <IconArrowRight color={Colors.WHITE} />
          </Touchable>
        </Block>
      </Block>

      <IconRectangle style={styles.rec} />
      <Block style={styles.coverBox}>
        {LIST_INFO.map((e: any, idx: number) => {
          const value = e.content === 'sex' ? (pet?.sex === 1 ? 'Đực' : 'Cái') : pet?.[e.content];
          return (
            <Block style={[styles.infoItem, idx === 2 && { borderRightWidth: 0 }]} key={'item' + idx}>
              <Block h={22} w={22} borderRadius={22} center bgColor={Colors.COLOR_6}>
                {e?.icon}
              </Block>
              <Block mgLeft={2.5} center>
                <Text text={translate(e?.title)} style={styles.title} />
                <Text text={value} style={styles.content} />
              </Block>
            </Block>
          );
        })}
      </Block>
    </Block>
  );
};

export const HeaderInformationPet = memo(HeaderInformationPetComponent, isEqual);

const styles = StyleSheet.create({
  avatarContainer: {
    width: scale(60),
    height: scale(60),
    alignItems: 'center',
    marginRight: scale(10),
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: moderateScale(60),
  },
  avatar: {
    width: scale(58),
    height: scale(58),
    borderRadius: moderateScale(58),
  },
  rec: {
    marginTop: scale(5),
    marginLeft: scale(19),
  },
  coverBox: {
    marginTop: -2,
    flexDirection: 'row',
    borderRadius: scale(10),
    backgroundColor: '#FEE4A1',
    paddingVertical: scale(11.5),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FontSize.size10,
    fontFamily: Fonts.BRANDING,
  },
  content: {
    fontSize: FontSize.size8,
    fontFamily: Fonts.MEDIUM,
  },
  infoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.COLOR_6,
    borderRightWidth: moderateScale(1),
  },
  infoBox: {
    marginTop: vScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: vScale(3),
    paddingHorizontal: scale(10),
    backgroundColor: Colors.COLOR_3,
    borderRadius: moderateScale(10),
  },
});
