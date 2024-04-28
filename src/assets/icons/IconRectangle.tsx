import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconRectangle = (props: SvgProps) => (
  <Svg width={20} height={12} fill="none" {...props}>
    <Path
      d="M9.244.873a1 1 0 0 1 1.512 0l8.203 9.472A1 1 0 0 1 18.203 12H1.797a1 1 0 0 1-.756-1.655L9.244.873Z"
      fill="#FEE4A1"
    />
  </Svg>
);
