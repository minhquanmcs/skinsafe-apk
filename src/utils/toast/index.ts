import { checkType } from '../handle';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export const showToastError = (message: string) => {
  if (!message || !checkType(message, 'string')) return;

  return Toast.show({ type: 'error', text1: message });
};

export const showToastSuccess = (message: string) => {
  if (!message || !checkType(message, 'string')) return;

  return Toast.show({ type: 'success', text1: message });
};
