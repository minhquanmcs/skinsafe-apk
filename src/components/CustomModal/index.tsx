import { StyleSheet } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import React, { useState, useImperativeHandle } from 'react';

interface CustomModalProps extends ModalProps {
  renderContent: () => React.ReactElement<any>;
  onModalHide: () => void;
  [x: string]: any;
}

export const CustomModal = React.forwardRef((props: CustomModalProps, ref) => {
  const [visible, setVisible] = useState(false);

  const { renderContent, onModalHide, ...rest } = props;

  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  return (
    <Modal
      style={styles.wrapper}
      onModalHide={onModalHide}
      {...rest}
      isVisible={visible}
      backdropOpacity={0.8}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}>
      {renderContent && renderContent()}
    </Modal>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
