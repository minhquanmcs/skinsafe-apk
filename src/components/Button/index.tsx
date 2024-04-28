import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import React, { memo, useMemo } from 'react';
import { Button as NBButton } from 'native-base';

import { Colors, FontSize } from '@themes';
import { ButtonProps } from './Button.props';
import { enhance, moderateScale, vScale } from '@utils';

const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const { disabled, fontStyle, isLoading, isDisabled, style: styleOverride, ...rest } = props;

  const memoDisabled = useMemo(() => {
    return disabled || isDisabled || isLoading;
  }, [disabled, isDisabled, isLoading]);

  const styleWrapper = useMemo(
    () => enhance([styles.wrapper, enhance([styleOverride]), memoDisabled && styles.disabled]),
    [props],
  );

  return <NBButton disabled={disabled} style={styleWrapper} isLoading={isLoading} isDisabled={isDisabled} {...rest} />;
};

export const Button = memo(ButtonComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    fontWeight: '700',
    height: vScale(40),
    fontSize: FontSize.size16,
    lineHeight: moderateScale(18),
    borderRadius: moderateScale(8),
    backgroundColor: Colors.COLOR_16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'rgba(169, 169, 169, 0.5)',
  },
  title: {
    fontWeight: '700',
    fontSize: FontSize.size14,
    lineHeight: moderateScale(18),
  },
});
