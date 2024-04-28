import { Alert, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import React, { useImperativeHandle, useRef, useState } from 'react';

import { scale } from '@utils';
import { translate } from '@assets';
import { Colors, FontSize } from '@themes';
import { Block, CustomModal, Text, Touchable } from '@components';

type Props = {
  minDate?: Date;
  maxDate?: Date;
  initDate?: any;
  setSelectedDate: (date: Date) => void;
};

export const ModalSelectDate = React.forwardRef((props: Props, ref) => {
  const { setSelectedDate, minDate, maxDate, initDate } = props;
  const refModal = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    open: () => refModal.current?.open(),
    close: () => refModal.current?.close(),
  }));

  const [selectingDate, setSelectingDate] = useState<any>(initDate ? new Date(initDate) : new Date());

  const validateDateBeforeToday = (date: Date) => {
    // const stringDate: string = moment(date).format('YYYY-MM-DD');
    // const today = moment().format('YYYY-MM-DD');
    // const compare = stringDate.localeCompare(today);
    // if (compare === -1) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  };

  const onPressConfirm = () => {
    if (validateDateBeforeToday(selectingDate)) {
      // setInputs({ dateEstablish: moment(selectedDate).format('YYYY-MM-DD') });
      setSelectedDate(selectingDate);
      refModal.current?.close();
    } else {
      Alert.alert('Thời gian không hợp lệ');
    }
  };

  const onDateChange = (date: Date) => {
    setSelectingDate(date);
  };

  const onBackdropPress = () => refModal.current?.close();

  const renderContent = () => {
    return (
      <Block style={styles.modalContainer}>
        <DatePicker
          mode={'date'}
          locale={'vi'}
          date={selectingDate}
          textColor={Colors.TEXT}
          is24hourSource={'locale'}
          androidVariant={'iosClone'}
          onDateChange={onDateChange}
          minimumDate={minDate ?? undefined}
          maximumDate={maxDate ?? undefined}
        />

        <Touchable onPress={onPressConfirm}>
          <Block style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>{translate('cm.submit')}</Text>
          </Block>
        </Touchable>
      </Block>
    );
  };

  return <CustomModal ref={refModal} renderContent={renderContent} onBackdropPress={onBackdropPress} />;
});

const styles = StyleSheet.create({
  buttonTitle: {
    fontWeight: '600',
    fontSize: FontSize.size14,
    lineHeight: scale(22),
    color: Colors.COLOR_1,
  },
  modalContainer: {
    backgroundColor: Colors.WHITE,
    height: scale(350),
    width: scale(308),
    alignSelf: 'center',
    borderRadius: scale(20),
    paddingVertical: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  confirmButton: {
    borderRadius: scale(20),
    height: scale(40),
    width: scale(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: Colors.COLOR_1,
    backgroundColor: Colors.COLOR_1,
  },
  confirmButtonText: {
    color: Colors.WHITE,
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '600',
    letterSpacing: scale(-0.32),
  },
});
