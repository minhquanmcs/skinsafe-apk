import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconHospital = (props: SvgProps) => (
  <Svg width={14} height={13} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M1 4.531 7.188.75l6.187 3.781M12 6.938v4.4a.413.413 0 0 1-.412.412h-8.8a.413.413 0 0 1-.413-.412v-4.4"
      stroke="#00C97C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.366 6.938a1.51 1.51 0 0 0-.178.178 1.51 1.51 0 0 0-.179-.178 1.51 1.51 0 0 0 .178-.179c.055.065.114.124.179.178Z"
      stroke="#E30613"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
