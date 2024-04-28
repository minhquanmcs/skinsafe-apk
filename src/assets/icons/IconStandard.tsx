import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';
export const IconStandard = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path d="M11.5 22.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z" fill="url(#b)" />
      <Path
        d="M13.317 7.77A4.993 4.993 0 0 1 9.455 3.91a.514.514 0 0 0-1.006 0A4.993 4.993 0 0 1 4.586 7.77a.514.514 0 0 0 0 1.006 4.993 4.993 0 0 1 3.862 3.862.514.514 0 0 0 1.007 0 4.993 4.993 0 0 1 3.862-3.862.514.514 0 0 0 0-1.006ZM12.467 16.265a2.353 2.353 0 0 1-1.82-1.82.514.514 0 0 0-1.006 0 2.353 2.353 0 0 1-1.82 1.82.514.514 0 0 0 0 1.007 2.353 2.353 0 0 1 1.82 1.82.514.514 0 0 0 1.006 0 2.352 2.352 0 0 1 1.82-1.82.514.514 0 0 0 0-1.006ZM19.414 11.504a3.18 3.18 0 0 1-2.46-2.46.514.514 0 0 0-1.006 0 3.18 3.18 0 0 1-2.46 2.46.514.514 0 0 0 0 1.006 3.18 3.18 0 0 1 2.46 2.46.514.514 0 0 0 1.007 0 3.18 3.18 0 0 1 2.46-2.46.514.514 0 0 0 0-1.006Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <LinearGradient id="b" x1={11.5} y1={0.5} x2={11.5} y2={22.5} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F9BE5E" />
        <Stop offset={1} stopColor="#E0A064" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .5)" d="M0 0h23v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
