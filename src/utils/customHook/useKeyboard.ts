import { device } from '../device';
import { Keyboard } from 'react-native';
import { useEffect, useState } from 'react';

export const useKeyboard = () => {
  let keyboardDidShow: any;
  let keyboardDidHide: any;

  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  function onKeyboardDidShow(e: any) {
    if (!e.endCoordinates) return;
    setKeyboardHeight(e.endCoordinates.height);
    setIsShowKeyboard(true);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
    setIsShowKeyboard(false);
  }

  useEffect(() => {
    if (device.isAndroid) {
      keyboardDidShow = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
      keyboardDidHide = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    } else {
      keyboardDidShow = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
      keyboardDidHide = Keyboard.addListener('keyboardWillHide', onKeyboardDidHide);
    }
    return () => {
      if (device.isAndroid) {
        keyboardDidHide.remove();
        keyboardDidShow.remove();
      } else {
        keyboardDidHide.remove();
        keyboardDidShow.remove();
      }
    };
  }, []);

  return { keyboardHeight, isShowKeyboard };
};
