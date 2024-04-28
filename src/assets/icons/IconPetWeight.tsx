import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconPetWeight = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.556.556A1.9 1.9 0 0 1 1.9 0h12.92a1.9 1.9 0 0 1 1.9 1.9v12.92a1.9 1.9 0 0 1-1.9 1.9H1.9a1.9 1.9 0 0 1-1.9-1.9V1.9C0 1.396.2.913.556.556ZM1.9 1.52a.38.38 0 0 0-.38.38v12.92a.38.38 0 0 0 .38.38h12.92a.38.38 0 0 0 .38-.38V1.9a.38.38 0 0 0-.38-.38H1.9Z"
      fill="#AB9E96"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.36 4.96c-1.524 0-2.838.638-3.976 2.006a.76.76 0 1 1-1.168-.972C4.606 4.323 6.33 3.44 8.36 3.44c2.03 0 3.755.883 5.144 2.554a.76.76 0 1 1-1.169.972C11.198 5.598 9.883 4.96 8.36 4.96Z"
      fill="#AB9E96"
    />
    <Path d="M8.36 11.02a1.14 1.14 0 1 0 0-2.28 1.14 1.14 0 0 0 0 2.28Z" fill="#AB9E96" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.018 6.601a.76.76 0 0 1 1.06.176l1.903 2.66a.76.76 0 1 1-1.236.885l-1.903-2.66a.76.76 0 0 1 .176-1.06Z"
      fill="#AB9E96"
    />
  </Svg>
);
