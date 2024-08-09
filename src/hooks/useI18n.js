/*
 * @FilePath: \institution-knowledge\src\hooks\useI18n.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-09 13:58:57
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 17:04:27
 * @Description:
 */
import { i18n } from '@/extend/vueI18n'

function getKey(namespace, key) {
  if (!namespace) {
    return key
  }
  if (key.startsWith(namespace)) {
    return key
  }
  return `${namespace}.${key}`
}

export function useI18n(namespace) {
  const normalFn = {
    t: (key) => {
      return getKey(namespace, key)
    },
  }

  if (!i18n) {
    return normalFn
  }

  const { t, ...methods } = i18n.global

  const tFn = (key, ...arg) => {
    console.log(key)

    if (!key)
      return ''
    if (!key.includes('.') && !namespace)
      return key
    return (t)(getKey(namespace, key), ...(arg))
  }
  return {
    ...methods,
    t: tFn,
  }
}

export const t = key => key
