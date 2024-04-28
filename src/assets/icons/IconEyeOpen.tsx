import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconEyeOpen = (props: SvgProps) => (
  <Svg width={18} height={13} fill="none" {...props}>
    <Path
      d="M18 6.188S14.625 0 9 0 0 6.188 0 6.188s3.375 6.187 9 6.187 9-6.188 9-6.188Zm-16.68 0a14.775 14.775 0 0 1 1.867-2.299C4.635 2.44 6.615 1.125 9 1.125s4.364 1.314 5.814 2.764a14.777 14.777 0 0 1 1.867 2.299 14.827 14.827 0 0 1-1.867 2.298c-1.45 1.45-3.43 2.764-5.814 2.764-2.385 0-4.364-1.314-5.814-2.764a14.776 14.776 0 0 1-1.867-2.299Z"
      fill={props?.color || '#A9A9A9'}
    />
    <Path
      d="M9 3.375A2.813 2.813 0 1 0 9 9a2.813 2.813 0 0 0 0-5.625ZM5.062 6.188a3.937 3.937 0 1 1 7.875 0 3.937 3.937 0 0 1-7.874 0Z"
      fill={props?.color || '#A9A9A9'}
    />
  </Svg>
);