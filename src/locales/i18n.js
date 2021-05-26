import { register, addMessages, init, getLocaleFromHash , getLocaleFromQueryString,  getLocaleFromNavigator } from 'svelte-i18n';
import { dictionary, locale, _} from 'svelte-i18n';
import en from './en.json';
import fr from './fr.json';


function setupI18n() {

  addMessages('en', en);
  addMessages('fr', fr);

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromQueryString('lang') || getLocaleFromNavigator(),
  })
  // console.log(getLocaleFromNavigator());
  // console.log(getLocaleFromQueryString('lang'));
}
export {
  _,
  setupI18n
};