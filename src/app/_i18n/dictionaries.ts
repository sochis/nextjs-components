import "server-only";

const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    return await dictionaries["en"]();
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    throw new Error(`Error loading locale dictionary for ${locale}`);
  }
};
