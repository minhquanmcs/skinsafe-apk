import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconQr = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M13 6H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM13 18H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM25 6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM18 18v4M18 26h4v-8M22 20h4M26 24v2"
      stroke={props.color || '#404446'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
