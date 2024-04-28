import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconHistory = (props: SvgProps) => (
  <Svg width={12} height={11} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M11 5.5V1.333A.833.833 0 0 0 10.167.5H1.833A.833.833 0 0 0 1 1.333v8.334a.833.833 0 0 0 .833.833H6"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M8.222 9.389a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" stroke="#000" />
    <Path
      d="M9.612 8.833 11 9.944M3.223 3.278h5.555M3.223 5.5h2.222"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
