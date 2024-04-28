import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconCartBottom = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="m6.078 21.688.005.005a1.2 1.2 0 0 0 .577.3 1.118 1.118 0 0 0 1.166-.49 1.141 1.141 0 0 0-.142-1.42 1.127 1.127 0 0 0-.803-.336h-.01c-.221 0-.442.068-.636.21-.178.127-.32.3-.404.505-.09.21-.11.437-.063.658.042.21.152.41.31.568ZM14.816 20.08l-.01-.01a1.152 1.152 0 0 0-1.614.005c-.22.219-.324.501-.324.799 0 .303.12.585.335.799a1.122 1.122 0 0 0 1.598 0c.214-.214.334-.496.334-.8 0-.302-.12-.584-.319-.793ZM10.905 18.439c-4.197 0-5.7-2.093-6.334-4.217-.402-1.34-.823-5.201-.823-5.201h11.458c4.003.065 3.012 9.418-4.3 9.418Z"
      stroke={props?.color || '#5B5B5B'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.533 7c.978 0 1.347.343 1.458.453.492.454.654 1.12.757 1.71l.091.583"
      stroke={props?.color || '#5B5B5B'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
