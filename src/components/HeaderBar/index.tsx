import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IHeaderBarProps } from './Header.props';
import { Colors, FontSize, Fonts } from '@themes';
import { Touchable, Block, Input, Text } from '@components';
import { IconArrowLeft, IconSearch, translate } from '@assets';
import { checkType, enhance, moderateScale, scale, vScale } from '@utils';

const HeaderBarComponent: React.FC<IHeaderBarProps> = (props) => {
  const {
    title,
    renderLeft,
    iconLeft = <IconArrowLeft />,
    onPressLeft,

    iconRight,
    onPressRight,
    renderRight,

    bgColor = 'COLOR_16',

    style,
    styleTitle,

    searchValue,
    onChangeText,
    defaultValue,
    onSubmitEditing,
    autoFocus,
    placeholder = translate('cm.search'),
    highlightCenter,
    enableGoBack = true,
  } = props;

  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const wrapperStyle = useMemo(() => {
    return enhance([styles.wrapper, bgColor && { backgroundColor: Colors[bgColor] }, enhance([style])]);
  }, [style, bgColor, insets]);

  const titleStyle = useMemo(() => {
    return enhance([styles.title, styleTitle, highlightCenter && styles.titleHighlight]);
  }, [styleTitle, highlightCenter]);

  const _onPressLeft = () => {
    if (onPressLeft && checkType(onPressLeft, 'function')) {
      onPressLeft();
    } else {
      iconLeft && navigation?.canGoBack() && navigation.goBack();
    }
  };

  const HeaderLeft = useCallback(() => {
    if (!enableGoBack) return <Block />;
    if (renderLeft && checkType(renderLeft, 'function')) {
      return renderLeft();
    } else {
      return (
        <Touchable onPress={_onPressLeft} style={styles.headerLeft}>
          {iconLeft}
        </Touchable>
      );
    }
  }, [iconLeft, onPressLeft, renderLeft]);

  const _onPressRight = () => {
    if (onPressRight && checkType(onPressRight, 'function')) {
      onPressRight();
    }
  };

  const HeaderRight = useCallback(() => {
    if (renderRight && checkType(renderRight, 'function')) {
      return renderRight();
    } else if (iconRight) {
      return (
        <Touchable onPress={_onPressRight} style={styles.headerLeft}>
          {iconRight}
        </Touchable>
      );
    } else {
      return <Block w={33} />;
    }
  }, [iconRight, onPressRight, renderRight]);

  return (
    <Block style={wrapperStyle}>
      <HeaderLeft />

      <Block style={[styles.centerContainer, highlightCenter && { backgroundColor: Colors.WHITE }]}>
        {searchValue !== undefined ? (
          <Input
            // value={searchValue}
            autoFocus={autoFocus}
            iconLeft={IconSearch}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
            styleWrapInput={styles.input}
            activeBorderColor={'transparent'}
            onSubmitEditing={onSubmitEditing}
          />
        ) : (
          <Text numberOfLines={1} style={titleStyle}>
            {title}
          </Text>
        )}
      </Block>

      <HeaderRight />
    </Block>
  );
};

export const HeaderBar = memo(HeaderBarComponent, isEqual);

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 9999,
    height: vScale(49),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    justifyContent: 'space-between',
  },
  headerLeft: {
    width: scale(33),
    height: vScale(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.COLOR_4,
    fontSize: FontSize.size18,
    fontFamily: Fonts.BRANDING,
  },
  input: {
    marginTop: 0,
    height: vScale(32),
    fontSize: FontSize.size12,
    backgroundColor: Colors.COLOR_4,
    borderRadius: moderateScale(100),
  },
  borderInput: {
    borderWidth: 0,
  },
  titleHighlight: {
    color: Colors.BLACK,
  },
  centerContainer: {
    flex: 1,
    height: vScale(32),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(5),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(100),
  },
});
