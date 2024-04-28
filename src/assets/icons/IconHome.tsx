import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconHome = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Path
      d="M19.875 18.081a.781.781 0 1 1-1.563 0v-7.856A.775.775 0 0 0 18 9.637l-7-5.762a.813.813 0 0 0-1.012 0L3 9.637a.775.775 0 0 0-.275.588v7.838a.8.8 0 0 1-1.6 0v-7.838a2.337 2.337 0 0 1 .85-1.8L9 2.675a2.35 2.35 0 0 1 2.988 0l7.037 5.75a2.338 2.338 0 0 1 .85 1.8v7.856Z"
      fill={props?.color || '#67686C'}
    />
    <Path
      d="M14.313 15.637H12.75a2.15 2.15 0 0 0-2.25-2.024 2.15 2.15 0 0 0-2.25 2.024h-1.5a3.75 3.75 0 0 1 3.75-3.587 3.75 3.75 0 0 1 3.813 3.587Zm-7.626 0H8.25v3.226H6.687v-3.226Zm6.063 0h1.563v3.226H12.75v-3.226Z"
      fill={props?.color || '#67686C'}
    />
  </Svg>
);
