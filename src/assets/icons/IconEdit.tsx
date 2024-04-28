import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconEdit = (props: SvgProps) => (
  <Svg width={19} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M0 4.5h11v2H0v-2Zm0-2h11v-2H0v2Zm0 8h7v-2H0v2Zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12Zm-.71.71L9 13.38v2.12h2.12l5.3-5.3-2.12-2.12Z"
      fill="#A9A9A9"
    />
  </Svg>
);
