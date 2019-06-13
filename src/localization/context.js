import { createContext } from "react";
import {
  LABEL_BUTTON__RESTAURANT__GO_TO_MENU,
  LABEL_BUTTON__RESTAURANT__SHOW_ON_MAP,
  LABEL_BUTTON__RESTAURANT__SHOW_REVIEWS,
  LOCALE__EN_US,
  LOCALE__RU_RU
} from "./textKeys";

export const NAVBAR_ITEM_LABEL_MAP = "navbar:item:label:map";
export const NAVBAR_ITEM_LABEL_LIST = "navbar:item:label:list";

const localizationData = {
  locale: LOCALE__RU_RU,
  setLocale: function(newLocale) {
    // this.locale = newLocale; // todo mutation alert
  },
  getLocales: function() {
    return [LOCALE__RU_RU, LOCALE__EN_US];
  },
  getValue: function(key) {
    let localeSet = this[this.locale];
    if (localeSet) {
      return localeSet[key] || key;
    }

    return key;
  },
  [LOCALE__EN_US]: {
    [LOCALE__EN_US]: "English",
    [LOCALE__RU_RU]: "Russian",

    [LABEL_BUTTON__RESTAURANT__SHOW_REVIEWS]: "Show reviews",
    [LABEL_BUTTON__RESTAURANT__GO_TO_MENU]: "Go to menu",
    [LABEL_BUTTON__RESTAURANT__SHOW_ON_MAP]: "Show on map",

    [NAVBAR_ITEM_LABEL_LIST]: "Restaurants",
    [NAVBAR_ITEM_LABEL_MAP]: "Map"
  },
  [LOCALE__RU_RU]: {
    [LOCALE__EN_US]: "английский",
    [LOCALE__RU_RU]: "русский",

    [LABEL_BUTTON__RESTAURANT__SHOW_REVIEWS]: "Отзывы",
    [LABEL_BUTTON__RESTAURANT__GO_TO_MENU]: "Меню",
    [LABEL_BUTTON__RESTAURANT__SHOW_ON_MAP]: "На карте"
  }
};

export const { Provider, Consumer } = createContext(localizationData);
export const LocalizationData = localizationData;
