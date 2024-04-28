import { IFlexContent, IFlexDirection } from '@configs';
import { ViewStyle, StyleProp, FlexAlignType, ViewProps } from 'react-native';



export interface BlockProps extends ViewProps {
  children?: React.ReactNode | any;
  flex?: boolean;
  mg?: number;
  center?: boolean;
  bgColor?: string;
  mgTop?: number;
  mgLeft?: number;
  mgRight?: number;
  mgBottom?: number;
  mgVertical?: number;
  mgHorizontal?: number;
  pd?: number;
  pdTop?: number;
  pdLeft?: number;
  pdRight?: number;
  pdBottom?: number;
  pdVertical?: number;
  pdHorizontal?: number;
  borderRadius?: number;
  w?: any;
  h?: any;
  justify?: IFlexContent;
  align?: FlexAlignType;
  style?: StyleProp<ViewStyle>;
  alignSelf?: 'auto' | FlexAlignType;
  direction?: 'column' | IFlexDirection;
  borderColor?: string;
}
