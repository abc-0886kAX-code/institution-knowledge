/*
 * @FilePath: \institution-knowledge\src\extend\vueI18n.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-09 13:18:33
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 17:14:10
 * @Description:
 */
import { createI18n } from 'vue-i18n'
import { useLocaleStore } from '@/store/useLocale.js'

export let i18n // eslint-disable-line  import/no-mutable-exports

export function setHtmlPageLang(locale) {
  document.querySelector('html')?.setAttribute('lang', locale)
}

async function createI18nOptions() {
  const localeStore = useLocaleStore()
  const locale = localeStore.getCurrentLocale
  const localeMap = localeStore.getLocaleMap
  const defaultLocal = await import(`../locales/${locale.lang}.js`)
  const message = defaultLocal.default ?? {}
  setHtmlPageLang(locale.lang)

  localeStore.setCurrentLocale({
    lang: locale.lang,
    // elLocale: elLocal
  })

  return {
    legacy: false,
    locale: locale.lang,
    fallbackLocale: locale.lang,
    messages: {
      [locale.lang]: message,
    },
    availableLocales: localeMap.map(v => v.lang),
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

export async function extendI18n(Vue) {
  const options = await createI18nOptions()
  i18n = createI18n(options)

  Vue.use(i18n)
}
