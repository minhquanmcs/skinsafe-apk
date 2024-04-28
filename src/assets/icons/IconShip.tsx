import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconShip = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M4 15.5V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.5"
      stroke="#FC0B54"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 7H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"
      stroke="#FC0B54"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <Path
      d="M8 17h8M8 2v2-2Zm4 0v2-2Zm4 0v2-2Z"
      stroke="#FC0B54"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
