import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconPetFoot = (props: SvgProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <Path
      d="M10.193 6.557c1.54 0 2.489-2.307 2.489-3.764 0-1.214-.593-2.672-1.778-2.672-1.541 0-2.49 2.308-2.49 3.765 0 1.214.593 2.671 1.779 2.671Zm-4.504 0c1.185 0 1.778-1.457 1.778-2.671C7.467 2.307 6.519 0 4.977 0 3.794 0 3.2 1.457 3.2 2.671c-.119 1.579.83 3.886 2.489 3.886Zm8.77-1.214c-1.54 0-2.607 2.186-2.607 3.764 0 1.093.474 2.186 1.54 2.186 1.541 0 2.608-2.186 2.608-3.764 0-1.093-.593-2.186-1.54-2.186ZM4.15 9.107c0-1.578-1.186-3.764-2.608-3.764C.474 5.343 0 6.436 0 7.529c0 1.578 1.185 3.764 2.607 3.764 1.067 0 1.541-1.093 1.541-2.186Zm3.792-.243c-2.37 0-5.57 3.886-5.57 6.557C2.37 16.636 3.2 17 4.147 17c1.422 0 2.489-.971 3.793-.971 1.185 0 2.252.971 3.555.971.948 0 2.015-.243 2.015-1.579 0-2.671-3.2-6.557-5.57-6.557Z"
      fill="#AB9E96"
    />
  </Svg>
);