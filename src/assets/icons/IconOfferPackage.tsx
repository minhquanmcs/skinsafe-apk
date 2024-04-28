import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';

export const IconOfferPackage = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path d="M11.5 22.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11Z" fill="url(#b)" />
      <Path
        d="M10.425 16.134c-.376 0-.73-.146-.995-.412l-2.483-2.483-1.157 1.157a.469.469 0 0 0 0 .663l4.303 4.304a.467.467 0 0 0 .663 0l6.456-6.456a.469.469 0 0 0 0-.663l-1.158-1.157-4.635 4.635a1.397 1.397 0 0 1-.994.412Z"
        fill="#fff"
      />
      <Path
        d="M12.908 3.637a.469.469 0 0 0-.663 0L5.79 10.093a.469.469 0 0 0 0 .662l4.303 4.304a.468.468 0 0 0 .663 0l6.456-6.455a.469.469 0 0 0 0-.663l-4.304-4.304Z"
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
