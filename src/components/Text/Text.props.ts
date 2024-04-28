import { ColorsType, FontSizeTypes, FontsType } from '@themes';
import { TextStyle, TextProps as TextProperties, StyleProp, FlexAlignType } from 'react-native';

type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
type VerticalAlign = 'auto' | 'bottom' | 'center' | 'top' | undefined;
type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';
type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export interface TextProps extends TextProperties {
  /**
   * Children of text
   * @default undefined
   */
  children?: React.ReactNode;

  /**
   * Text which is looked up via i18n.
   * @default undefined
   */
  tx?: string;

  /**
   * Option of i18n
   * @default undefined
   */
  txOptions?: object;

  /**
   * Using text string instead i18n
   * @default undefined
   */
  text?: string;

  flex?: boolean;

  /**
   * Enable to using {flexWrap:'wrap'}
   * @default undefined
   */
  wrap?: boolean;

  /**
   * Overwrite font size
   * @default size16
   */
  size?: FontSizeTypes;
  fWeight?: FontWeight;
  fFamily?: FontsType;

  /**
   *  Text margin
   */
  mg?: number;
  mgTop?: number;
  mgLeft?: number;
  mgRight?: number;
  mgBottom?: number;
  mgVertical?: number;
  mgHorizontal?: number;

  /**
   * Text padding
   */
  pd?: number;
  pdTop?: number;
  pdLeft?: number;
  pdRight?: number;
  pdBottom?: number;
  pdVertical?: number;
  pdHorizontal?: number;

  /**
   * Text width and heigh
   */
  w?: any;
  h?: any;

  /**
   * @default #414141
   */
  color?: ColorsType;

  /**
   *  style of Text
   * */
  center?: boolean;
  textAlign?: TextAlign;
  alignItems?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
  textAlignVertical?: VerticalAlign;
  textTransform?: TextTransform;
  style?: StyleProp<TextStyle>;
}
