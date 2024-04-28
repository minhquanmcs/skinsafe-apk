import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconKey = (props: SvgProps) => (
  <Svg width={22} height={12} fill="none" {...props}>
    <Path
      d="M5.79 11.579a5.797 5.797 0 0 0 5.67-4.632h2.435v2.316h2.316V6.947h2.315v3.474h2.316V6.947H22V4.632H11.46A5.797 5.797 0 0 0 5.79 0 5.796 5.796 0 0 0 0 5.79a5.796 5.796 0 0 0 5.79 5.789Zm0-9.263a3.478 3.478 0 0 1 3.473 3.473A3.478 3.478 0 0 1 5.79 9.263 3.478 3.478 0 0 1 2.316 5.79a3.478 3.478 0 0 1 3.473-3.473Z"
      fill={props?.color || '#A9A9A9'}
    />
  </Svg>
);
