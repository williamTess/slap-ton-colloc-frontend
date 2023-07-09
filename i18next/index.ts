import i18n, { ModuleType } from "i18next";

import { initReactI18next } from "react-i18next";
// import * as RNLocalize from "react-native-localize";
import * as RNLocalize from "expo-localization";

import english from "./translations/english.json";
import french from "./translations/french.json";

/**
 * Constants
 */

export const USER_PREFERRED_LANGUAGE = RNLocalize.getLocales()[0].languageCode;

const MODULE_TYPE: ModuleType = "languageDetector";

const LANGUAGE_DETECTOR = {
  async: true,
  cacheUserLanguage: () => {},
  detect: (cb: (code: string) => void) => {
    return cb(USER_PREFERRED_LANGUAGE);
  },
  init: () => {},
  type: MODULE_TYPE,
};

const RESOURCES = {
  en: english,
  fr: french,
};

/**
 * i18next
 */

i18n
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: "v3",
    resources: RESOURCES,
    // language to use if translations in user language are not available
    fallbackLng: "fr",
  });

export default i18n;
