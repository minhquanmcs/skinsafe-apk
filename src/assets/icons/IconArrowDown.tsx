import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconArrowDown = (props: SvgProps) => (
  <Svg width={10} height={6} fill="none" {...props}>
    <Path
      d="M9.395 1.73A.82.82 0 0 0 8.255.553l-2.559 2.48a1 1 0 0 1-1.392 0L1.746.554A.82.82 0 0 0 .605 1.729l3.698 3.594a1 1 0 0 0 1.394 0l3.698-3.594Z"
      fill={props.color || '#313131'}
    />
  </Svg>
);
