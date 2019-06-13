import { createContext } from "react";
import {
  RESTAURANT_BUTTON_LABEL__GO_TO_MENU,
  RESTAURANT_BUTTON_LABEL__SHOW_ON_MAP,
  RESTAURANT_BUTTON_LABEL__SHOW_REVIEWS,
  LOCALE__EN_US,
  LOCALE__RU_RU,
  REVIEW_BUTTON_LABEL__ADD_REVIEW,
  REVIEW_BUTTON_LABEL__ADD_REVIEW_CANCEL,
  REVIEW_INPUT_LABEL__USER,
  REVIEW_INPUT_LABEL__RATING,
  REVIEW_INPUT_LABEL__REVIEW_TEXT,
  USER_FORM_INPUT_LABEL__USERNAME,
  USER_FORM_INPUT_LABEL__ADDRESS,
  USER_FORM_INPUT_LABEL__SEND_ORDER,
  ORDER_LIST_LABEL__NO_ITEMS,
  ORDER_LIST_LABEL__YOUR_ORDER,
  ORDER_LIST_LABEL__TOTAL,
  USER_FORM_INPUT_LABEL__PHONE_NUMBER,
  THANK_YOU_PAGE__TITLE
} from "./textKeys";

export const NAVBAR_ITEM_LABEL_MAP = "navbar:item:label:map";
export const NAVBAR_ITEM_LABEL_LIST = "navbar:item:label:list";

const localizationData = {
  locale: LOCALE__RU_RU,
  setLocale: function(newLocale) {
    throw "setLocale(newLocale) method must be overridden before provider creation";
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
    [LOCALE__RU_RU]: "Русский",

    [RESTAURANT_BUTTON_LABEL__SHOW_REVIEWS]: "Show reviews",
    [RESTAURANT_BUTTON_LABEL__GO_TO_MENU]: "Go to menu",
    [RESTAURANT_BUTTON_LABEL__SHOW_ON_MAP]: "Show on map",

    [NAVBAR_ITEM_LABEL_LIST]: "Restaurants",
    [NAVBAR_ITEM_LABEL_MAP]: "Map",

    [REVIEW_BUTTON_LABEL__ADD_REVIEW]: "Add Review",
    [REVIEW_BUTTON_LABEL__ADD_REVIEW_CANCEL]: "Cancel",
    [REVIEW_INPUT_LABEL__USER]: "User",
    [REVIEW_INPUT_LABEL__RATING]: "Rating",
    [REVIEW_INPUT_LABEL__REVIEW_TEXT]: "Review",

    [USER_FORM_INPUT_LABEL__USERNAME]: "User",
    [USER_FORM_INPUT_LABEL__PHONE_NUMBER]: "Phone Number",
    [USER_FORM_INPUT_LABEL__ADDRESS]: "Address",
    [USER_FORM_INPUT_LABEL__SEND_ORDER]: "Send Order",

    [ORDER_LIST_LABEL__NO_ITEMS]: "There is no items in your order",
    [ORDER_LIST_LABEL__YOUR_ORDER]: "Your order",
    [ORDER_LIST_LABEL__TOTAL]: "Total",

    [THANK_YOU_PAGE__TITLE]: "Thanks for your order!"
  },
  [LOCALE__RU_RU]: {
    [LOCALE__EN_US]: "English",
    [LOCALE__RU_RU]: "Русский",

    [RESTAURANT_BUTTON_LABEL__SHOW_REVIEWS]: "Отзывы",
    [RESTAURANT_BUTTON_LABEL__GO_TO_MENU]: "Меню",
    [RESTAURANT_BUTTON_LABEL__SHOW_ON_MAP]: "На карте",

    [NAVBAR_ITEM_LABEL_LIST]: "Рестораны",
    [NAVBAR_ITEM_LABEL_MAP]: "Карта",

    [REVIEW_BUTTON_LABEL__ADD_REVIEW]: "Добавить отзыв",
    [REVIEW_BUTTON_LABEL__ADD_REVIEW_CANCEL]: "Отмена",
    [REVIEW_INPUT_LABEL__USER]: "Пользователь",
    [REVIEW_INPUT_LABEL__RATING]: "Оценка",
    [REVIEW_INPUT_LABEL__REVIEW_TEXT]: "Отзыв",

    [USER_FORM_INPUT_LABEL__USERNAME]: "Имя",
    [USER_FORM_INPUT_LABEL__PHONE_NUMBER]: "Телефон",
    [USER_FORM_INPUT_LABEL__ADDRESS]: "Адрес",
    [USER_FORM_INPUT_LABEL__SEND_ORDER]: "Сделать Заказ",

    [ORDER_LIST_LABEL__NO_ITEMS]:
      "Ваш заказ пуст. Попробуйте это исправить! =)",
    [ORDER_LIST_LABEL__YOUR_ORDER]: "Ваш заказ",
    [ORDER_LIST_LABEL__TOTAL]: "Итого",

    [THANK_YOU_PAGE__TITLE]: "Спасибо за заказ!"
  }
};

export const { Provider, Consumer } = createContext(localizationData);
export const LocalizationData = localizationData;
