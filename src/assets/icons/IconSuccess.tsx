import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

export const IconSuccess = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Circle cx={8} cy={8} r={8} fill={props.color || '#21C87A'} />
    <Path d="M11.083 6.333 7.166 10.25l-2.5-2.333L5.75 7l1.5 1.417 2.916-3 .917.916Z" fill="#fff" />
  </Svg>
);
