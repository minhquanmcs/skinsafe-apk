import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconSearch = (props: SvgProps) => (
  <Svg width={props?.width ?? 17} height={props?.height ?? 17} fill="none" {...props}>
    <Path
      d="M8.082 14.333c3.437 0 6.222-2.984 6.222-6.666C14.304 3.985 11.52 1 8.082 1 4.646 1 1.86 3.985 1.86 7.667s2.786 6.666 6.222 6.666ZM15.86 16l-3.383-3.625"
      stroke={props?.color || '#A9A9A9'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
