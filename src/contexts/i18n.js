import { createContext } from 'react';
import { LOCALE } from '../constants';

export const { Provider, Consumer } = createContext({
  lang: LOCALE.EN,
  locale: {},
  changeLocale: () => {},
  getText: name => {}
});
