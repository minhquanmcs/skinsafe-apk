import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';

export const IconError = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Circle cx={8} cy={8} r={8} fill="#E30613" />
    <Path d="M7.335 10.668h1.332V12H7.335v-1.332Zm1.236-4.596-.3 3.732h-.54l-.3-3.732v-2.64h1.14v2.64Z" fill="#fff" />
  </Svg>
);
