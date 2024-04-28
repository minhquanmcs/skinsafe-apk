import { TextStyle, StyleProp, ViewStyle, TextInputProps } from 'react-native';
export interface InputProps extends TextInputProps {
  /**
   * Disable input or not
   * @default false
   */
  disabled?: boolean;

  /**
   * auto Focus input
   * @default false
   */
  autoFocus?: boolean;

  /**
   * clear input
   * @default false
   */
  clearButton?: boolean;

  /**
   * @default false
   */
  isRequired?: boolean;

  /**
   * Input invalid or not
   * @default false
   */
  error?: any;

  /**
   * Input placeholder
   * @default undefined
   */
  placeholder?: string;

  /**
   * Input placeholder color
   * @default #969BAB
   */
  placeholderColor?: string;

  /**
   * Label title of input
   */
  label?: string;

  /**
   * Input autoCapitalize
   * @default none
   */
  autoCapitalize?: any;

  /**
   * Function on input change text
   * @default undefined
   */
  onTextChange?: (value?: string) => void;

  /**
   * function pass to last input of form when click return key
   */
  onSubmit?: () => void;

  /**
   * Set default value for input
   * @default undefined
   */
  defaultValue?: string;

  /**
   * Label color when input focus
   * @default #313131
   */
  activeLabelColor?: string;

  /**
   * Border color when input focus
   * @default #E2E2E2
   */
  activeBorderColor?: string;

  /**
   * Label color when input blur
   * @default #969BAB
   */
  inactiveLabelColor?: string;

  /**
   * Border color when input blur
   * @default #E2E2E2
   */
  inactiveBorderColor?: string;

  /**
   * Label color when input disabled
   * @default #E2E2E2
   */
  disabledLabelColor?: string;

  /**
   * Border color when input disabled
   * @default #E2E2E2
   */
  disabledBorderColor?: string;

  /**
   * Border color when input not valid
   * @default #FE0E56
   */
  errorColor?: string;

  /**
   * style wrapper all
   * @default {}
   */
  styleContainer?: StyleProp<ViewStyle>;

  /**
   * style block wrap TextInput & Icon:>> ex - borderBottomColor
   * @default {}
   */
  styleWrapInput?: StyleProp<ViewStyle>;

  /**
   * Overwrite input style
   * @default {}
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * style label
   * @default {}
   */
  styleLabel?: StyleProp<TextStyle>;
  /**
   * maxLength
   */
  maxLength?: number;
  /**
   * name icon right
   */
  iconRight?: any;
  /**
   * name icon left
   */
  iconLeft?: any;
  /**
   * text More under title
   */
  textMore?: string;
  /**
   * onPressIcon func
   */
  onPressIcon?: () => void;
  /**
   * secureTextEntry text
   */
  secureTextEntry?: boolean;

  styleTextMore?: StyleProp<TextStyle>;

  labelMore?: string | undefined;

  isHideError?: boolean;
  disableEdit?: boolean;
}
