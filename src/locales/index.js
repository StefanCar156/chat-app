import { createI18n } from "vue-i18n"
import en from "./en.json"
import sr from "./sr.json"
import { nextTick } from "vue"

const DEFAULT_LOCALE = "sr"
export const SUPPORTED_LOCALES = ["en", "sr"]

const extractLanguage = (locale) => {
  return locale.split("-")[0]
}

export function getDefaultLocale() {
  const persistedLocale = localStorage.getItem("locale")

  if (persistedLocale) {
    return persistedLocale
  }

  const availableLocales = SUPPORTED_LOCALES
  const navigatorLocale = navigator.language

  if (availableLocales.includes(navigatorLocale)) {
    return navigatorLocale
  }

  const navigatorLang = extractLanguage(navigatorLocale)

  if (navigatorLocale.split("-").length > 1) {
    if (availableLocales.includes(navigatorLang)) {
      return navigatorLang
    }
  }

  const fallback = availableLocales.find(
    (locale) => extractLanguage(locale) === navigatorLang
  )

  return fallback ? fallback : DEFAULT_LOCALE
}

export async function loadLocaleMessages(i18n, locale) {
  if (!i18n.availableLocales.includes(locale)) {
    const messages = await import(
      /* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`
    )
    i18n.setLocaleMessage(locale, messages.default)
  }

  return nextTick()
}

export default createI18n({
  locale: DEFAULT_LOCALE,
  legacy: false,
  fallbackLocale: "en",
  globalInjection: true,
  messages: { en, sr },
})
