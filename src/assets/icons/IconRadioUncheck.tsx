import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconRadioUncheck = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path d="M17.5 9a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z" stroke="#A9A9A9" />
  </Svg>
);
