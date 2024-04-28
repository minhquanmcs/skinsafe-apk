import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconCart2 = (props: SvgProps) => (
  <Svg width={24} height={23} fill="none" {...props}>
    <Path
      d="m7.256 20.876.008.008c.224.21.516.367.822.427.307.06.636.03.935-.09a1.614 1.614 0 0 0 .987-1.498c0-.42-.172-.839-.464-1.13a1.605 1.605 0 0 0-1.144-.48h-.015c-.314 0-.628.097-.905.3-.254.18-.456.426-.575.718-.127.3-.157.622-.09.936.06.3.217.584.441.81ZM19.236 18.596l-.015-.014a1.633 1.633 0 0 0-2.298.007 1.578 1.578 0 0 0-.46 1.138c0 .431.17.833.475 1.137a1.597 1.597 0 0 0 2.276 0c.305-.304.476-.706.476-1.137 0-.431-.171-.833-.454-1.13ZM14.124 17.037c-5.568 0-7.562-2.868-8.404-5.78-.533-1.838-1.091-7.13-1.091-7.13h15.2c5.311.09 3.997 12.91-5.705 12.91Z"
      stroke={props.color || '#67686C'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.401.9c1.369 0 1.886.538 2.04.71.689.71.916 1.756 1.06 2.68l.128.913"
      stroke={props.color || '#67686C'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
