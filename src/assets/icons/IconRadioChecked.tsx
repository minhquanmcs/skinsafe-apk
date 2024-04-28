import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconRadioChecked = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z" stroke="#E30613" strokeWidth={4} />
  </Svg>
);
