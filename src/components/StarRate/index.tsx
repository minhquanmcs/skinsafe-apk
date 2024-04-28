import React, { memo } from 'react';
import Stars from 'react-native-stars';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { IconEmptyStar, IconStar } from '@assets';
import { Image } from '../Image';
import { scale } from '@utils';

interface IStarRate {
  rate?: number | string;
  color?: string;
  size?: number;
  disabled?: boolean;
  updateStar?: (e: any) => void;
  half?: boolean;
  space?: number;
  review?: boolean;
}

const StarRateComponent = (props: IStarRate) => {
  const { rate, color, size = 12, disabled = true, updateStar, half = false, space = 0, review } = props;

  return (
    <Stars
      disabled={disabled}
      count={5}
      half={half}
      spacing={space}
      default={Number(rate) ?? 5}
      fullStar={<Image source="imgStar" style={{ width: scale(size), height: scale(size), tintColor: color }} />}
      emptyStar={
        <Image
          source={review ? 'imgEmptyStarRate' : 'imgEmptyStar'}
          style={{ width: scale(size), height: scale(size), tintColor: color }}
        />
      }
      //   halfStar={<Icon name="icHalfStar" size={size} color={color} />}
      update={(val: any) => {
        updateStar && updateStar(val);
      }}
    />
  );
};

export const StarRate = memo(StarRateComponent, isEqual);

const styles = StyleSheet.create({});
