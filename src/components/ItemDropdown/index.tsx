import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleProp, StyleSheet, TextProps } from 'react-native';

import { Colors } from '@themes';
import { IconArrowDown, translate } from '@assets';
import { BlockProps } from '../Block/Block.props';
import { Text, Block, Touchable } from '@components';
import { moderateScale, scale, vScale } from '@utils';

interface IItemDropdownProps extends BlockProps {
  value?: string;
  label?: string;
  placeholder?: string;
  onPress?: () => void;
  isRequired?: boolean;
  icon?: React.ReactElement;
  textStyle?: StyleProp<TextProps>;
  labelStyle?: StyleProp<TextProps>;
}

const ItemDropdownComponent: React.FC<IItemDropdownProps> = (props) => {
  const {
    value,
    label,
    placeholder = translate('placeholder.dropdown_placeholder'),
    onPress,
    isRequired,
    textStyle,
    labelStyle,
    style,
    icon,
    ...rest
  } = props;

  return (
    <Block mgTop={22} {...rest}>
      {label ? (
        <Text size={'size12'} style={labelStyle}>
          {label}
          {isRequired && (
            <Text size={'size12'} color="COLOR_1">
              *
            </Text>
          )}
        </Text>
      ) : null}

      <Touchable style={[styles.touch, style]} onPress={onPress}>
        <Text size="size12" color={value ? 'BLACK' : 'COLOR_9'} style={textStyle}>
          {value ?? placeholder}
        </Text>
        {icon ?? <IconArrowDown color={Colors.COLOR_9} />}
      </Touchable>
    </Block>
  );
};

export const ItemDropdown = memo(ItemDropdownComponent, isEqual);

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    height: vScale(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vScale(12),
    paddingLeft: scale(16),
    paddingRight: scale(26),
    borderColor: Colors.COLOR_9,
    borderWidth: moderateScale(1),
    justifyContent: 'space-between',
    borderRadius: moderateScale(100),
  },
});
