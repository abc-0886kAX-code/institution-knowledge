import { i18n, setHtmlPageLang } from '@/extend/vueI18n'
import { useLocaleStore } from '@/store/useLocale'

function setI18nLanguage(locale) {
  const localeStore = useLocaleStore()

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  }
  else {
    ; (i18n.global.localey).value = locale
  }
  localeStore.setCurrentLocale({
    lang: locale,
  })
  setHtmlPageLang(locale)
}

export function useLocale() {
  // Switching the language will change the locale of useI18n
  // And submit to configuration modification
  const changeLocale = async (locale) => {
    const globalI18n = i18n.global
    console.log(globalI18n)

    const langModule = await import(`../locales/${locale}.js`)

    globalI18n.setLocaleMessage(locale, langModule.default)

    setI18nLanguage(locale)
  }

  return {
    changeLocale,
  }
}
