import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconArrowRight = (props: SvgProps) => (
  <Svg width={5} height={11} fill="none" {...props}>
    <Path
      d="m1 10.5 2.172-2.172a4 4 0 0 0 0-5.656L1 .5"
      stroke={props.color || '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
