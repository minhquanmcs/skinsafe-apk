import { device } from '../device';
// import { translate } from '@assets/i18n';
import { Linking, Alert } from 'react-native';

export function convertPhone(phone: string, isCodeVn: boolean = false) {
  if (!phone) return 'Invalid phone number';

  // convert to +84
  // format for send request to firebase. Ex: +84912345678

  if (isCodeVn) {
    let firstCharacter = phone.charAt(0);
    let phoneNumber;
    if (firstCharacter === '0') {
      const cutNumber = phone.slice(1, 10);
      const vnCode = '+84';
      phoneNumber = vnCode.concat(cutNumber);
    }
    return phoneNumber;
  }

  // convert to 0
  // format phone to render. Ex: 0917 974 997
  let firstCharacter = phone.slice(0, 3);
  let phoneNumber: string;
  if (firstCharacter === '+84') {
    const cutNumber = phone.slice(3, 12);
    const vnCode = '0';
    phoneNumber = vnCode.concat(cutNumber);
    return phoneNumber;
  }
  return phone.slice(0, 4) + ' ' + phone.slice(4, 7) + ' ' + phone.slice(7);
}

export const callNumber = (phone: string | number) => {
  if (!phone) return; //TODO: translate
  // Alert.alert(translate('cm.error'), translate('cm.empty_phone_number'));

  let phoneNumber = phone.toString().replace(/\s/g, '');
  if (device.isAndroid) {
    phoneNumber = `tel:${phoneNumber}`;
  } else {
    phoneNumber = `telprompt:${phoneNumber}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        // Alert.alert(translate('cm.error'), translate('cm.cannot_call'));
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => {
      // Alert.alert(translate('cm.error'), translate('cm.cannot_call'));
    });
};
