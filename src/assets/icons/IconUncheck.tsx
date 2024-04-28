import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';

interface IIconUncheckProps extends SvgProps {
  size?: number;
}

export const IconUncheck = (props: IIconUncheckProps) => {
  const { size = 16, ...rest } = props;
  return (
    <Svg width={size} height={size} fill="none" {...rest}>
      <Rect x={0.5} y={0.5} rx={3.5} width={size - 1} height={size - 1} stroke={props?.color || '#A9A9A9'} />
    </Svg>
  );
};
