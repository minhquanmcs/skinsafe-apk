import * as React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'react-native';

export const FocusAwareStatusBar = ({ barStyle = 'light-content', ...props }: StatusBarProps) => {
  // state
  const isFocused = useIsFocused();

  // render
  return isFocused ? <StatusBar barStyle={barStyle} {...props} /> : null;
};
