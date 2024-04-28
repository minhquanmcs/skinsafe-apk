import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconArrowRightFat = (props: SvgProps) => (
  <Svg width={10} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M2.95 1.117A1.58 1.58 0 0 0 .715 3.349l3.319 3.326a4 4 0 0 1 0 5.65L.715 15.651a1.58 1.58 0 0 0 2.235 2.232l5.555-5.555a4 4 0 0 0 0-5.656L2.95 1.117Z"
      fill={props.color || '#313131'}
    />
  </Svg>
);
