import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';
import React, { forwardRef, ForwardRefRenderFunction, memo, useImperativeHandle, useRef, useState } from 'react';

import { Colors } from '@themes';
import { Text, Block } from '@components';
import { CustomModal } from '../CustomModal';

interface PopupHandler {
  open(data: any): void;
  close(): void;
}
interface IPopupProps {}

const PopupSelectAttProductComponent: ForwardRefRenderFunction<PopupHandler, IPopupProps> = (props, ref) => {
  const {} = props;
  const refModal = useRef<any>(null);

  const [data, setData] = useState<any>(null);

  // refs to call from component parent
  useImperativeHandle(ref, () => ({
    open: (data: any) => {
      setData(data);
      refModal.current.open();
    },
    close: () => {
      setData(null);
      refModal.current.close();
    },
  }));

  const onBackdropPress = () => refModal.current.close();

  const renderContent = () => {
    return (
      <Block pdVertical={100} bgColor={Colors.WHITE} w="100%" center>
        <Text>chọn thuộc tính sp</Text>
      </Block>
    );
  };

  return <CustomModal ref={refModal} renderContent={renderContent} onBackdropPress={onBackdropPress} />;
};

export const PopupSelectAttProduct = memo(forwardRef(PopupSelectAttProductComponent), isEqual);

const styles = StyleSheet.create({});
