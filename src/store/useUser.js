/*
 * @FilePath: \institution-knowledge\src\store\useUser.js
 * @Author: zhangxin
 * @Date: 2023-02-07 15:09:09
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 14:36:33
 * @Description:
 */
import { defineStore } from 'pinia'
import { isEmptyString } from '~/shared/is'
import { uuid } from '@/shared/uuid.js'
import { pinia } from '@/extend/pinia'

const paths = ['token']

export const Namespace = 'useUser'

export const useUser = defineStore(Namespace, {
  state: () => ({
    token: uuid(),
  }),

  getters: {
    tokenUnusable() {
      return isEmptyString(this.token)
    },
    tokenUsable() {
      return !this.tokenUnusable
    },
  },

  actions: {
    setupToken(token) {
      this.token = token
    },
    emptyUserInfo() {
      this.token = ''
    },
  },

  persist: {
    key: Namespace,
    paths,
  },
})

export function useUserStore() {
  return useUser(pinia)
}

export default {
  namespace: Namespace,
  store: useUser,
}
