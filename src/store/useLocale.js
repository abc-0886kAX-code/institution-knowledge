/*
 * @FilePath: \institution-knowledge\src\store\useLocale.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-09 13:23:24
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 16:54:14
 * @Description:
 */
import { defineStore } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { pinia } from '@/extend/pinia'
import { useStorage } from '@/hooks/useStorage'

const { getStorage, setStorage } = useStorage('localStorage')

export const Namespace = 'useLocale'

const elLocaleMap = {
  'zh-CN': zhCn,
  'en': en,
}

export const useLocale = defineStore(Namespace, {
  state: () => ({
    currentLocale: {
      lang: getStorage('lang') || 'zh-CN',
      elLocale: elLocaleMap[getStorage('lang') || 'zh-CN'],
    },
    // 多语言
    localeMap: [
      {
        lang: 'zh-CN',
        name: '简体中文',
      },
      {
        lang: 'en',
        name: 'English',
      },
    ],
  }),

  getters: {
    getCurrentLocale() {
      return this.currentLocale
    },
    getLocaleMap() {
      return this.localeMap
    },
  },
  actions: {
    setCurrentLocale(localeMap) {
      // this.locale = Object.assign(this.locale, localeMap)
      this.currentLocale.lang = localeMap?.lang
      this.currentLocale.elLocale = elLocaleMap[localeMap?.lang]
      setStorage('lang', localeMap?.lang)
    },
  },
  persist: {
    key: Namespace,
  },
})

export function useLocaleStore() {
  return useLocale(pinia)
}

export default {
  namespace: Namespace,
  store: useLocale,
}
