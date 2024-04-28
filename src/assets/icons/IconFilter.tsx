import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconFilter = (props: SvgProps) => (
  <Svg width={14} height={12} fill="none" {...props}>
    <Path
      d="M6.8 10.661a.644.644 0 0 1-.179.524.612.612 0 0 1-.872 0L3.277 8.66a.633.633 0 0 1-.186-.53V4.894L.131 1.023A.642.642 0 0 1 .235.14.61.61 0 0 1 .619 0h8.654a.635.635 0 0 1 .614.559.642.642 0 0 1-.126.464l-2.96 3.872v5.766ZM1.855 1.263 4.328 4.46v3.486l1.236 1.263V4.453l2.473-3.19m-.619 7.58L10.51 12 13.6 8.842H7.418Z"
      fill="#000"
    />
  </Svg>
);
