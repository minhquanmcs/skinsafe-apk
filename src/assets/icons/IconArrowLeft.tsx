import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconArrowLeft = (props: SvgProps) => (
  <Svg width={10} height={19} fill="none" {...props}>
    <Path
      d="m8.25 17.5-5.422-5.422a4 4 0 0 1 0-5.656L8.25 1"
      stroke={props?.color || '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
