import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const IconEditCalender = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M3.75 7.5h10.5V9h1.5V4.5c0-.825-.675-1.5-1.5-1.5h-.75V1.5H12V3H6V1.5H4.5V3h-.75c-.833 0-1.493.675-1.493 1.5L2.25 15a1.5 1.5 0 0 0 1.5 1.5H9V15H3.75V7.5Zm0-3h10.5V6H3.75V4.5Zm13.38 7.71-.532.532-1.59-1.59.532-.532a.747.747 0 0 1 1.058 0l.532.533a.747.747 0 0 1 0 1.057Zm-2.655-.525 1.59 1.59-3.975 3.975H10.5v-1.59l3.975-3.975Z"
      fill={props?.color ?? '#7763F0'}
    />
  </Svg>
);
