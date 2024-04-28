import React, {
  memo,
  useRef,
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react';
import { TextInput, InputAccessoryView, View, Platform } from 'react-native';
import isEqual from 'react-fast-compare';

import styles from './styles';
import { Touchable } from '../Touchable';
import { Block, Text } from '@components';
import { InputProps } from './Input.props';
import { checkType, enhance, scale } from '@src/utils';
import { Colors } from '@themes';

export interface InputRefHandles {
  focus(): void;
  clear(): void;
  blur(): void;
}

const InputComponent: ForwardRefRenderFunction<InputRefHandles, InputProps> = (props, ref) => {
  const {
    // style Props
    inputStyle = {},
    styleContainer = {},
    styleWrapInput = {},
    clearButton = false,

    // Props: label, TextInput, icon, react-hook-form
    iconRight,
    iconLeft,
    textMore,
    maxLength,
    placeholder,
    defaultValue,
    keyboardType,
    onTextChange,
    onPressIcon,
    disabled = false,
    autoFocus = false,
    error = undefined,
    isRequired = false,
    secureTextEntry = false,
    autoCapitalize = 'none',
    errorColor = Colors.COLOR_16,
    placeholderColor = Colors.COLOR_9,

    onBlur,
    disableEdit,
    // style label
    label,
    styleLabel = {},
    activeLabelColor = Colors.COLOR_9,
    inactiveLabelColor = Colors.COLOR_9,
    disabledLabelColor = Colors.COLOR_9,
    labelMore,
    isHideError,

    // style border
    activeBorderColor = Colors.COLOR_2,
    disabledBorderColor = Colors.COLOR_12,
    inactiveBorderColor = Colors.COLOR_12,
    styleTextMore,

    ...rest
  } = props;

  // state and refs of input
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus) inputRef?.current && inputRef.current.focus();
  }, []);

  const _onChangeText = (text: string) => {
    if (!disableEdit) setValue(text);
  };

  const clearInput = useCallback(() => {
    if (onTextChange && checkType(onTextChange, 'function')) {
      onTextChange(value);
    }
    inputRef?.current && inputRef.current.clear();
    setValue('');
  }, [value]);

  // refs to call from component parent
  useImperativeHandle(ref, () => ({
    focus: () => inputRef?.current && inputRef.current.focus(),
    clear: () => inputRef?.current && inputRef.current.clear(),
    blur: () => inputRef?.current && inputRef.current.blur(),
  }));

  // Func:>> Focus and blur input
  const _onFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const _onBlur = useCallback((e: any) => {
    setFocused(false);
    onBlur && checkType(onBlur, 'function') && onBlur(e);
  }, []);

  // style of input
  const inputSty = useMemo(() => enhance([styles.input, inputStyle]), [inputStyle]);

  // render Color label
  const labelColor = useCallback(() => {
    if (disabled) return disabledLabelColor;
    if (focused) return activeLabelColor;
    return inactiveLabelColor;
  }, [disabled, focused]);

  // render border color
  const borderColor = useCallback(() => {
    if (error && !isHideError) return errorColor;
    if (focused) return activeBorderColor;
    if (disabled) return disabledBorderColor;
    return inactiveBorderColor;
  }, [disabled, focused, error]);

  const isError = Boolean(error);
  const LeftIcon = iconLeft;
  const RightIcon = iconRight;
  return (
    <>
      <Block style={[styles.container, { borderColor: borderColor() }, styleContainer]}>
        <Block align="center" style={[styles.wrapInput, { borderColor: borderColor() }, styleWrapInput]}>
          {iconLeft ? (
            <Block mgRight={12} h={'100%'} center>
              <LeftIcon width={20} color="#A9A9A9" />
            </Block>
          ) : null}
          <Block flex>
            {label && (
              <Text style={[styles.label, styleLabel]}>
                {label}
                {isRequired && <Text style={[styles.label, { color: errorColor }]}> (*)</Text>}
                {Boolean(labelMore) && <Text style={{}}> ({labelMore})</Text>}
              </Text>
            )}
            <TextInput
              ref={inputRef}
              onBlur={_onBlur}
              onFocus={_onFocus}
              autoCorrect={false}
              editable={!disabled}
              autoFocus={autoFocus}
              maxLength={maxLength}
              placeholder={focused ? '' : placeholder}
              keyboardType={keyboardType}
              onChangeText={_onChangeText}
              autoCapitalize={autoCapitalize}
              selectionColor={activeLabelColor}
              defaultValue={defaultValue ?? ''}
              underlineColorAndroid={'transparent'}
              style={[{ color: labelColor() }, inputSty]}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={placeholderColor ?? '#A9A9A9'}
              inputAccessoryViewID={'doneButton'}
              {...rest}
            />
            {Platform.OS === 'ios' && (keyboardType === 'numeric' || keyboardType === 'phone-pad') && (
              <InputAccessoryView nativeID={'doneButton'}>
                <View
                  style={{
                    height: scale(40),
                    backgroundColor: '#d1d4d9',
                    justifyContent: 'center',
                    paddingTop: scale(2),
                  }}>
                  <Touchable
                    style={{
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: scale(120),
                      alignSelf: 'flex-end',
                    }}>
                    <Text style={styles.submitText}>Xác nhận</Text>
                  </Touchable>
                </View>
              </InputAccessoryView>
            )}
          </Block>

          {iconRight ? (
            <Touchable pdLeft={20} onPress={onPressIcon}>
              {/* right icon */}
              <RightIcon width={20} color="#A9A9A9" />
            </Touchable>
          ) : clearButton && value ? (
            <Touchable pdLeft={20} onPress={clearInput}>
              {/* <Icon name="icCancel" color={Colors.SECONDARY} size={16} /> */}
              {/* ic cancel */}
            </Touchable>
          ) : null}
        </Block>
      </Block>
      {isError && !isHideError && (
        <Block direction="row" mgTop={7}>
          {/* warn icon */}
          {/* <Icon size={16} name="icWarn" /> */}
          <Text style={styles.errorForm}>{error}</Text>
        </Block>
      )}
    </>
  );
};

export const Input = memo(forwardRef(InputComponent), isEqual);
