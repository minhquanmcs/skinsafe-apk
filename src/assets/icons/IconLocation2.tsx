import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconLocation2 = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M14.714 4.42c-2.603-2.56-6.824-2.56-9.427 0a6.483 6.483 0 0 0 0 9.275L10 18.332l4.714-4.637a6.485 6.485 0 0 0 0-9.275ZM10 11.25c-.557 0-1.08-.217-1.473-.61a2.086 2.086 0 0 1 0-2.948A2.07 2.07 0 0 1 10 7.082a2.085 2.085 0 0 1 0 4.167Z"
      fill={props.color || '#731702'}
    />
  </Svg>
);
