import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconUser = (props: SvgProps) => (
  <Svg width={19} height={20} fill="none" {...props}>
    <Path
      d="M15.833 17.125v-1.583a3.167 3.167 0 0 0-3.166-3.167H6.333a3.167 3.167 0 0 0-3.166 3.167v1.583M9.5 9.208a3.167 3.167 0 1 0 0-6.333 3.167 3.167 0 0 0 0 6.333Z"
      stroke={props.color || '#67686C'}
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
