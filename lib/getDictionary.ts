import "server-only"

import en from "@/dictionaries/en.json"

const dictionaries = {
  en: () =>
    import("@/dictionaries/en.json").then((m) => m.default),
  fr: () =>
    import("@/dictionaries/fr.json").then((m) => m.default),
}

export type Lang = keyof typeof dictionaries

export type Dict = typeof en

export const hasLocale = (locale: string): locale is Lang =>
  locale in dictionaries

export const getDictionary = async (locale: Lang): Promise<Dict> =>
  dictionaries[locale]()
