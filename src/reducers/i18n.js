import { LOAD_LOCALE, START, SUCCESS, FAIL } from '../constants';

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  lang: '',
  locale: {}
};

export default (i18nState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_LOCALE + START: {
      return {
        ...i18nState,
        loading: true,
        loaded: false
      };
    }
    case LOAD_LOCALE + SUCCESS: {
      return {
        ...i18nState,
        lang: payload,
        locale: action.response,
        loading: false,
        loaded: true
      };
    }
    case LOAD_LOCALE + FAIL: {
      return {
        ...i18nState,
        lang: payload,
        entities: action.response,
        loading: false,
        loaded: false,
        error: action.error
      };
    }
    default: {
      return i18nState;
    }
  }
};
