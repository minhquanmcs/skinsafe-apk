import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export function IconChat3(props: SvgProps) {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M.363 7.39l.416-1.403a.25.25 0 00-.026-.2A3.477 3.477 0 013.895.52a3.481 3.481 0 013.309 3.173 3.477 3.477 0 01-2.71 3.697 3.482 3.482 0 01-2.426-.342.25.25 0 00-.178-.024L.363 7.39zM3.98 4.005a.25.25 0 00-.5 0v.005a.25.25 0 00.5 0v-.005zm-1.658 0a.25.25 0 00-.5 0v.005a.25.25 0 00.5 0v-.005zm3.316 0a.25.25 0 00-.5 0v.005a.25.25 0 00.5 0v-.005z"
        stroke="#000"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
