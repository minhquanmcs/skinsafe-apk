import { StyleSheet } from 'react-native';
import React, { useImperativeHandle, useRef } from 'react';

import { Colors } from '@themes';
import { translate } from '@assets';
import { APP_NAME } from '@src/contants';
import { Text, Block, CustomModal, Touchable } from '@components';
import { checkPermissionLocation, moderateScale, vScale } from '@utils';

interface IModalLocationProps {}

export const ModalLocation = React.forwardRef((props: IModalLocationProps, ref) => {
  const {} = props;
  const refModal = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    open: () => refModal.current.open(),
    close: () => refModal.current.close(),
  }));

  const onClose = () => {
    refModal?.current?.close();
  };
  const onSubmit = async () => {
    refModal?.current?.close();
    const res = await checkPermissionLocation(true);
  };

  const renderContent = () => {
    return (
      <Block style={styles.wrapper}>
        <>
          <Block pd={24}>
            <Text size="size18" fFamily="BRANDING" center>
              <Text size="size18" color="COLOR_1" fFamily="BRANDING">
                “{APP_NAME}”
              </Text>{' '}
              {translate('find_near_shop.permission_location')}
            </Text>

            <Text center mgTop={15}>
              App
              <Text color="COLOR_1"> {APP_NAME}</Text> {translate('find_near_shop.permission_location_content')}
            </Text>
          </Block>

          <Block style={styles.bottom}>
            <Touchable style={[styles.btn, { borderRightWidth: moderateScale(1) }]} onPress={onSubmit}>
              <Text>{translate('cm.ok')}</Text>
            </Touchable>
            <Touchable style={styles.btn} onPress={onClose}>
              <Text>{translate('cm.cancel')}</Text>
            </Touchable>
          </Block>
        </>
      </Block>
    );
  };

  return <CustomModal ref={refModal} renderContent={renderContent} />;
});

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingBottom: 0,
    borderRadius: moderateScale(8),
    backgroundColor: Colors.COLOR_4,
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
});
