import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';
export const IconRate = (props: SvgProps) => (
  <Svg width={28} height={33} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M13.954 0A13.834 13.834 0 0 0 .09 13.724c-.058 5.76 3.396 10.71 8.345 12.866.823.36 1.542.95 2.04 1.692l2.48 3.651a1.202 1.202 0 0 0 1.983 0l2.48-3.65a4.83 4.83 0 0 1 2.04-1.693c4.915-2.133 8.357-7.024 8.357-12.727C27.816 6.213 21.616 0 13.954 0Zm7.707 12.31-2.909 3.025a.752.752 0 0 0-.197.672l.846 4.115c.128.614-.51 1.101-1.066.835l-3.79-1.82a.764.764 0 0 0-.707.023l-3.663 2.075c-.545.313-1.206-.14-1.125-.765l.58-4.15a.748.748 0 0 0-.243-.66L6.28 12.82a.751.751 0 0 1 .383-1.299l4.138-.741a.768.768 0 0 0 .556-.44l1.716-3.826a.756.756 0 0 1 1.356-.046l1.993 3.697a.77.77 0 0 0 .58.395l4.184.486a.747.747 0 0 1 .476 1.264Z"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient id="b" x1={2.565} y1={32.455} x2={33.208} y2={16.031} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF1990" />
        <Stop offset={0.771} stopColor="#FF32C8" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.092)" d="M0 0h27.819v32.455H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
