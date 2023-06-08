import {I18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en';
import te from './locales/te';

const locales = RNLocalize.getLocales();
const i18n = new I18n({
  en,
  te,
});
if (Array.isArray(locales)) {
  i18n.Locales = locales[0].languageTag;
}
i18n.fallBacks = true;

export function strings(name, params = {}) {
  return i18n.translate(name, params);
}

export default i18n;
