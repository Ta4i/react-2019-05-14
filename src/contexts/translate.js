import { createContext } from "react";

import EN from "../i18n/en.json";
import RU from "../i18n/ru.json";

const translations = {
  en: EN,
  ru: RU
};

export const getTranslate = langCode => key =>
  translations[langCode][key] || key;

const initialState = {
  t: getTranslate("en")
};

export const I18nContext = createContext(initialState);
