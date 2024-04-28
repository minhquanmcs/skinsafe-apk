import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconNote = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V4H5v16h14ZM8 9h8v2H8V9Zm0 4h8v2H8v-2Z"
      fill="#FC0B54"
    />
  </Svg>
);
