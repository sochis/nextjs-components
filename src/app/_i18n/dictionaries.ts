import "server-only";

import { I18nParams } from "@/types/language/language";

const dictionaries: { [key: string]: () => Promise<I18nParams> } = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    console.warn(`Locale '${locale}' not found, falling back to 'en'.`);
    return await dictionaries["en"]();
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading locale dictionary for '${locale}':`, error);
    console.warn(`Falling back to 'en' dictionary.`);
    return await dictionaries["en"]();
  }
};
