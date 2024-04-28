import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

export const IconSuccessAuth = (props: SvgProps) => (
  <Svg width={226} height={226} fill="none" {...props}>
    <Circle cx={113} cy={113} r={113} fill="#D4FDEA" />
    <Circle cx={113} cy={113} r={83} fill="#92E9C0" />
    <Circle cx={112.619} cy={112.619} r={55.619} fill="#21C87A" />
    <Path d="M132.5 104.5 109 128l-15-14 6.5-5.5 9 8.5L127 99l5.5 5.5Z" fill="#fff" />
  </Svg>
);
