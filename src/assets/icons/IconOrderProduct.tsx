import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconOrderProduct = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M4 14h6v2H4v-2Zm0 4h10v2H4v-2Z" fill="#313131" />
    <Path
      d="M22 0H2a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V2a2.002 2.002 0 0 0-2-2Zm-8 2v4h-4V2h4ZM2 22V2h6v6h8V2h6l.001 20H2Z"
      fill="#313131"
    />
  </Svg>
);
