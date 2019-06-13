import { LOAD_LOCALE } from '../constants';

export const loadLocale = locale => ({
  type: LOAD_LOCALE,
  payload: locale,
  params: `?locale=${locale}`,
  callAPI: 'http://localhost:3001/api/i18n'
});
