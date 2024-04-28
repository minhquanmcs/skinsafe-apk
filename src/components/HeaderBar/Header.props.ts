import React from 'react';
import { ColorsType } from '@themes';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface IHeaderBarProps {
  title?: string;
  iconLeft?: React.ReactElement | null;
  onPressLeft?: () => void;

  iconRight?: React.ReactElement | null;
  onPressRight?: () => void;

  renderLeft?: () => React.ReactElement;
  renderRight?: () => React.ReactElement;

  bgColor?: ColorsType;

  style?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;

  autoFocus?: boolean;
  searchValue?: string;
  placeholder?: string;
  defaultValue?: string;
  onChangeText?: (e: string) => void;
  onSubmitEditing?: () => void;
  highlightCenter?: boolean;
  enableGoBack?: boolean;
}
