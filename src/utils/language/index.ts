import dayjs from 'dayjs';
import { i18n } from '@assets';
import { storeVanilla } from '@store';
import { IAppLanguage } from '@configs';

require('dayjs/locale/vi');
require('dayjs/locale/en');

export const changeLanguage = (lang: IAppLanguage = 'vi') => {
  return new Promise((resolve, reject) => {
    try {
      const actSetLanguage = storeVanilla.getState().actSetLanguage;
      dayjs.locale(lang);
      i18n.locale = lang;
      actSetLanguage(lang);

      return resolve(lang);
    } catch (error) {
      reject(error);
    }
  });
};
