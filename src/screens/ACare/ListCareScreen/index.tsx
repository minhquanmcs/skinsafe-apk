import isEqual from 'react-fast-compare';
import React, { memo, useState } from 'react';
import ProgressCircle from 'react-native-progress-circle';

import { images } from '@assets';
import { Block, Text, WrapperImageBg, Image, Touchable } from '@components';
import { Colors } from '@themes';
import { SCREENS } from '@navigation';

interface IProps {
  route: any;
  navigation: any;
}

const result = [
  {
    title: 'Acne',
    more: 'No Pathologies',
    des: '...',
    best: true,
    value: 94,
  },
  {
    title: 'psoriasis',
    more: 'No Pathologies',
    des: '...',
    best: false,
    value: 5,
  },
  {
    title: 'eczema',
    more: 'No Pathologies',
    des: '...',
    best: false,
    value: 1,
  },
];
const ListCareComponent: React.FC<IProps> = (props) => {
  const { navigation, route } = props;

  const onPressItem = (item: any) => {
    navigation.navigate(SCREENS.DETAIL_CARE, { item: item });
  };
  return (
    <Block>
      <WrapperImageBg source={images.bg_injection_certificate}>
        <Block pdTop={20}>
          <Block justify="center" align="center">
            <Image source="icTop" style={{ width: 130, height: 130 }} />
          </Block>
          <Text style={{ textAlign: 'center', marginHorizontal: 32, marginTop: 12, fontSize: 15, color: '#fff', fontWeight: '700' }}>
            SKIN SAFE Assistant
          </Text>
        </Block>
        <Block pdTop={16} pdHorizontal={16} bgColor="#fff" flex style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 24 }}>
          {result.map((e, i) => (
            <Touchable
              onPress={() => onPressItem(e)}
              mgTop={16}
              pd={12}
              pdVertical={8}
              direction="row"
              align="center"
              key={i}
              style={{ backgroundColor: '#e6ffe6', borderRadius: 20 }}>
              <ProgressCircle
                percent={e?.best ? 100 : 0}
                radius={25}
                borderWidth={5}
                color={e?.best ? '#4dff4d' : '#3399FF'}
                shadowColor="#f0f4f0"
                bgColor="#fff">
                <Text style={{ fontSize: 14, color: e?.best ? Colors.COLOR_17 : Colors.BLACK, fontWeight: '700' }}>{e?.best ? 'A' : 'N'}</Text>
              </ProgressCircle>
              <Block mgLeft={16} flex>
                <Text style={{ fontSize: 16, color: e?.best ? Colors.COLOR_17 : Colors.BLACK, fontWeight: '700' }}>{e?.title}</Text>
                <Text style={{ fontSize: 14, marginTop: 8, color: Colors.TEXT_2 }}>{e?.des}</Text>
              </Block>
              <Image source="icNext" style={{ width: 24, height: 24, tintColor: Colors.COLOR_2 }} />
            </Touchable>
          ))}
          <Block justify="center" align="center" mgTop={32}>
            <Image source="icAI" style={{ width: 70, height: 70 }} />
          </Block>
          <Text style={{ fontSize: 16, marginTop: 10, color: Colors.COLOR_6, fontWeight: '700', textAlign: 'center' }}>More than knowledge</Text>
          <Text style={{ fontSize: 14, marginTop: 8, color: Colors.TEXT_2, textAlign: 'center', marginHorizontal: 16 }}>
            opens up a boundless world with the support of AI to help you lead a healthier life
          </Text>
        </Block>
      </WrapperImageBg>
    </Block>
  );
};

export const ListCareScreen = memo(ListCareComponent, isEqual);
