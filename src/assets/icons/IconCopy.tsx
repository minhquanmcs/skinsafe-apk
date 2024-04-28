import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconCopy = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M4.5 9a.963.963 0 0 1-.706-.293A.963.963 0 0 1 3.5 8V2c0-.275.098-.51.294-.706A.963.963 0 0 1 4.5 1H9c.275 0 .51.098.707.294A.964.964 0 0 1 10 2v6c0 .275-.098.51-.293.707A.964.964 0 0 1 9 9H4.5Zm0-1H9V2H4.5v6Zm-2 3a.964.964 0 0 1-.706-.293A.964.964 0 0 1 1.5 10V3.5c0-.142.048-.26.144-.357A.483.483 0 0 1 2 3c.142 0 .26.048.357.143A.485.485 0 0 1 2.5 3.5V10h5c.142 0 .26.048.356.144A.483.483 0 0 1 8 10.5c0 .142-.048.26-.144.356A.484.484 0 0 1 7.5 11h-5Zm2-9v6-6Z"
      fill="#7763F0"
    />
  </Svg>
);
