import { createContext } from "react";
import {
  LABEL_BUTTON__SHOW_REVIEWS,
  LOCALE__EN_US,
  LOCALE__RU_RU
} from "./textKeys";

const localizationData = {
  locale: LOCALE__RU_RU,
  setLocale: function(newLocale) {
    this.locale = newLocale; // todo mutation alert
  },
  getLocales: function() {
    return [LOCALE__RU_RU, LOCALE__EN_US];
  },
  getValue: function(key) {
    let localeSet = this[this.locale];
    if (localeSet) {
      return localeSet[key];
    }

    return key;
  },
  [LOCALE__EN_US]: {
    [LABEL_BUTTON__SHOW_REVIEWS]: "Show reviews"
  },
  [LOCALE__RU_RU]: {
    [LABEL_BUTTON__SHOW_REVIEWS]: "Отзывы"
  }
};

export const { Provider, Consumer } = createContext(localizationData);
export const LocalizationData = localizationData;
