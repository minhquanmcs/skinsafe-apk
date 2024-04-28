import dayjs from 'dayjs';
import { I18n } from 'i18n-js';
import { storeVanilla } from '@store';
import * as RNLocalize from 'react-native-localize';

const vi = require('./vi');
const en = require('./en');
require('dayjs/locale/vi');

export const i18n = new I18n({ en, vi });

i18n.enableFallback = true;
i18n.defaultLocale = 'vi';

const fallback = { languageTag: 'vi', isRTL: false };

const { app } = storeVanilla.getState();
const language = app.language;

dayjs.locale(language ?? 'vi');
i18n.locale = language;
storeVanilla.setState({ app: { ...app, language: language } });

export const i18ndayjs = (time: any) => {
  return dayjs(time).locale(i18n.locale);
};

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: string, options?: any) {
  return key ? i18n.t(key, options) : '';
}
