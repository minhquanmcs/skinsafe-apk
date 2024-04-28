import * as React from 'react';
import Svg, { SvgProps, Circle } from 'react-native-svg';

export const IconMore = (props: SvgProps) => (
  <Svg width={26} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx={8} cy={8} r={2} fill="#AB9E96" />
    <Circle cx={14} cy={8} r={2} fill="#AB9E96" />
    <Circle cx={20} cy={8} r={2} fill="#AB9E96" />
  </Svg>
);
