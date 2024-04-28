import React from 'react';
import { StyleSheet } from 'react-native';

import { Colors, FontSize } from '@themes';
import { moderateScale, vScale } from '@utils';
import { Text, Block, CustomModal, Touchable } from '@components';

interface IAlertModalProps {
  title?: string;
  content: string;
  titleClose?: string;
  titleSubmit?: string;
  onClose: () => void;
  onSubmit?: () => void;
}

export const AlertModal = React.forwardRef((props: IAlertModalProps, ref) => {
  const { title, content, onClose, onSubmit, titleSubmit = 'Xác nhận', titleClose = 'Đóng' } = props;

  const renderContent = () => {
    return (
      <Block style={styles.wrapper}>
        <>
          <Block pd={24}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            {content ? <Text style={styles.content}>{content}</Text> : null}
          </Block>

          <Block style={styles.bottom}>
            {onSubmit && (
              <Touchable style={[styles.btn, { borderRightWidth: moderateScale(1) }]} onPress={onSubmit}>
                <Text style={styles.titleBtn}>{titleSubmit}</Text>
              </Touchable>
            )}
            <Touchable style={styles.btn} onPress={onClose}>
              <Text style={styles.titleBtn}>{titleClose}</Text>
            </Touchable>
          </Block>
        </>
      </Block>
    );
  };

  return <CustomModal ref={ref} renderContent={renderContent} />;
});

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingBottom: 0,
    borderRadius: moderateScale(8),
    backgroundColor: Colors.COLOR_4,
  },
  title: {
    fontWeight: '700',
    color: Colors.BLACK,
    textAlign: 'center',
    fontSize: FontSize.size18,
    lineHeight: moderateScale(18),
  },
  content: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: vScale(20),
    fontSize: FontSize.size16,
  },
  bottom: {
    flexDirection: 'row',
    borderColor: '#E2E2E2',
    borderTopWidth: moderateScale(1),
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    paddingVertical: vScale(20),
  },
  titleBtn: {
    fontWeight: '700',
    color: Colors.COLOR_1,
    fontSize: FontSize.size18,
    lineHeight: moderateScale(18),
  },
});
