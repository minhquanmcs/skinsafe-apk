import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconPrevious = (props: SvgProps) => (
  <Svg width={11} height={18} fill="none" {...props}>
    <Path
      d="M8.05 17.383a1.58 1.58 0 0 0 2.234-2.232l-4.727-4.738a2 2 0 0 1 0-2.826l4.727-4.738A1.58 1.58 0 0 0 8.05.617L1.08 7.586a2 2 0 0 0 0 2.828l6.97 6.97Z"
      fill={props.color || '#FF8F76'}
    />
  </Svg>
);
