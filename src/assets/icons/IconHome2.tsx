import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconHome2 = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M5 12H3l9-9 9 9H5Z"
      stroke="#FC0B54"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M10 12h4v4h-4v-4Z" stroke="#FC0B54" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);
