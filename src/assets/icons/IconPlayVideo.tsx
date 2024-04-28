import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

export const IconPlayVideo = (props: SvgProps) => (
  <Svg width={15} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#a)">
      <Path d="M4.813 11.5V4.937l4.812 2.188.438.875L7 11.063l-2.188.437Z" fill="#fff" />
      <Path
        d="M14 8A7 7 0 1 1 0 8a7 7 0 0 1 14 0ZM5.941 5.456a.437.437 0 0 0-.691.356v4.375a.438.438 0 0 0 .691.357l3.063-2.188a.438.438 0 0 0 0-.712L5.94 5.456Z"
        fill="#ED1B24"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 1)" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
