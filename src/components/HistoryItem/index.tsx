import dayjs from 'dayjs';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';

import { Block, ImageRemote, Text } from '@components';
import { currencyFormat, moderateScale, scale, vScale } from '@utils';

interface IHistoryItemProps {
  data: any;
  index?: number;
}

const HistoryItemComponent: React.FC<IHistoryItemProps> = (props) => {
  const { data, index } = props;

  return (
    <Block style={[styles.wrapper, index === 0 && { borderTopWidth: moderateScale(1) }]}>
      <ImageRemote source="https://picsum.photos/801" style={styles.img} resizeMode="cover" />
      <Block pdHorizontal={20} flex>
        <Text fWeight="500">Nạp tiền vào ví </Text>
        <Text fWeight="500" size="size10" color="TEXT_2" mgTop={1}>
          {dayjs().format('DD-MM-YYYY HH:mm')}
        </Text>
      </Block>
      <Block align="flex-end">
        <Text fWeight="700" size="size12">
          -{currencyFormat(200000)}
        </Text>
        <Text fWeight="500" size="size12" color="COLOR_6">
          +40 xu
        </Text>
        <Text fWeight="500" size="size12" color="TEXT_2">
          Sản phẩm
        </Text>
      </Block>
    </Block>
  );
};

export const HistoryItem = memo(HistoryItemComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderColor: '#F1F1F1',
    paddingVertical: vScale(18),
    paddingHorizontal: scale(15),
    borderBottomWidth: moderateScale(1),
  },
  img: {
    width: scale(32),
    height: scale(32),
    borderRadius: moderateScale(32),
  },
});
