import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconChat = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M21 6.25H6.5a1 1 0 0 0-1 1v9.5a1.5 1.5 0 0 0 1.5 1.5h8.5l5 4v-4h.5a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5Z"
      stroke={props?.color || '#5B5B5B'}
      strokeWidth={1.3}
    />
    <Path
      d="M3 3.25h14a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H8.5l-5 4v-4H3a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 3 3.25Z"
      fill="#fff"
      stroke={props?.color || '#5B5B5B'}
      strokeWidth={1.3}
    />
    <Path
      d="M6.472 9.14h1.11v1.11h-1.11V9.14Zm2.966 0h1.11v1.11h-1.11V9.14Zm2.967 0h1.11v1.11h-1.11V9.14Z"
      fill={props?.color || '#5B5B5B'}
    />
  </Svg>
);
