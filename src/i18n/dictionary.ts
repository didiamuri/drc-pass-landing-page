import 'server-only';
import type { Locale } from './i18n.config'

const dictionaries = {
    en: () => import('./dictionaries/en.json').then(module => module.default),
    fr: () => import('./dictionaries/fr.json').then(module => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!(locale === "en" || locale === "fr")) {
    locale = "en";
  }
  return dictionaries[locale as Locale]();
};