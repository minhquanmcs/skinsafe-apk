import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { Image } from '../Image';
import { device, moderateScale, scale } from '@utils';
import { Bar } from 'react-native-progress';
import { ColorsType } from '@themes';
import { Colors } from '@themes';

interface IProgressBar {
  progress?: number;
  w?: number;
  h?: number;
  color?: ColorsType;
}

const ProgressBarComponent = (props: IProgressBar) => {
  const { progress = 1, w = null, color = 'COLOR_6', h = moderateScale(4) } = props;
  return <Bar progress={progress} width={w} color={Colors[color]} height={h} />;
};

export const ProgressBar = memo(ProgressBarComponent, isEqual);

const styles = StyleSheet.create({});
