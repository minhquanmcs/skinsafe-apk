import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconNext = (props: SvgProps) => (
  <Svg width={11} height={18} fill="none" {...props}>
    <Path
      d="M2.95.617A1.58 1.58 0 0 0 .715 2.849l4.728 4.738a2 2 0 0 1 0 2.826L.715 15.15a1.58 1.58 0 0 0 2.235 2.232l6.97-6.969a2 2 0 0 0 0-2.828L2.95.616Z"
      fill={props.color || '#FF8F76'}
    />
  </Svg>
);
