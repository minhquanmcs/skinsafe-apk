import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconCart = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      d="m5.148 10.856.002.002a.517.517 0 0 0 .544.104.5.5 0 0 0-.192-.963h-.005a.51.51 0 0 0-.486.606c.018.093.067.181.137.251ZM8.86 10.15l-.005-.005a.508.508 0 0 0-.712.003A.489.489 0 0 0 8 10.5c0 .134.053.258.147.352a.495.495 0 0 0 .706 0A.495.495 0 0 0 9 10.5a.509.509 0 0 0-.14-.35ZM7.115 9c-1.827 0-2.48-.889-2.757-1.79C4.183 6.64 4 5 4 5h4.987c1.742.028 1.311 4-1.872 4Z"
      stroke={props?.color || '#67686C'}
      strokeWidth={0.6}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 4c.424 0 .584.125.632.165.214.165.284.408.329.623L4 5"
      stroke={props?.color || '#67686C'}
      strokeWidth={0.6}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
