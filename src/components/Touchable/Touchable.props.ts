import { ViewStyle, TouchableOpacityProps, StyleProp, FlexAlignType } from 'react-native';

type FlexContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export interface TouchableProps extends TouchableOpacityProps {
  onPress?: () => void;
  children?: React.ReactNode;
  flex?: boolean;
  center?: boolean;
  bgColor?: string;
  mg?: number;
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
  justify?: FlexContent;
  align?: FlexAlignType;
  style?: StyleProp<ViewStyle>;
  alignSelf?: 'auto' | FlexAlignType;
  direction?: 'column' | FlexDirection;
}
