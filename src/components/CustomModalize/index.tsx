import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import { Portal } from 'react-native-portalize';
import { Modalize, ModalizeProps } from 'react-native-modalize';
import React, { memo, useImperativeHandle, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { device } from '@utils';
import { translate } from '@assets';
import { Block, Text, Touchable } from '@components';

interface ICustomModalizeProps extends ModalizeProps {
  title?: string;
}

const CustomModalizeComponent = React.forwardRef((props: ICustomModalizeProps, ref: any) => {
  const { modalHeight = (device.height * 2) / 5, title, children, ...rest } = props;

  const insets = useSafeAreaInsets();
  const refModalize = useRef<Modalize>(null);

  useImperativeHandle(ref, () => ({
    open: () => refModalize.current?.open(),
    close: () => refModalize.current?.close(),
  }));

  const onPressClose = () => refModalize.current?.close();

  const HeaderComponent = () => {
    return (
      <Block pdHorizontal={15} pdTop={24} pdBottom={30} direction="row" justify="space-between" align="center">
        <Block w={45} />
        <Text fWeight="700" size="size20" color="TEXT">
          {title}
        </Text>
        <Touchable onPress={onPressClose}>
          <Text color={'COLOR_1'}>{translate('cm.cancel')}</Text>
        </Touchable>
      </Block>
    );
  };

  return (
    <Portal>
      <Modalize
        ref={refModalize}
        withHandle={false}
        modalHeight={modalHeight}
        FooterComponent={<Block h={insets.bottom} />}
        HeaderComponent={title ? <HeaderComponent /> : undefined}
        {...rest}>
        {children}
      </Modalize>
    </Portal>
  );
});

export const CustomModalize = memo(CustomModalizeComponent, isEqual);

const styles = StyleSheet.create({});
