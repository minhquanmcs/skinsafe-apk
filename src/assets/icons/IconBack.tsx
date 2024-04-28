import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconBack = (props: SvgProps) => (
  <Svg width={38} height={38} fill="none" {...props}>
    <Path
      d="m22.166 28.5 2.233-2.233L17.147 19l7.252-7.268L22.166 9.5l-9.5 9.5 9.5 9.5Z"
      stroke={props?.color || '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
