import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconLocation = (props: SvgProps) => (
  <Svg width={10} height={10} fill="none" {...props}>
    <Path
      d="M1.25 4.057a.312.312 0 0 0 .197.296l3 1.2 1.2 3a.313.313 0 0 0 .29.197h.006a.313.313 0 0 0 .288-.206l2.5-6.875a.312.312 0 0 0-.4-.4l-6.875 2.5a.313.313 0 0 0-.206.289Z"
      fill={props?.color || '#FE0E56'}
    />
  </Svg>
);
