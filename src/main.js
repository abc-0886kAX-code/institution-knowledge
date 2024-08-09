/*
 * @FilePath: \institution-knowledge\src\main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 17:07:41
 * @Description:
 */

// 初始化多语言
import { createApp } from 'vue'

import { extendI18n } from '@/extend/vueI18n'
import { extendRouter } from '@/extend/router'

import { extendPinia } from '@/extend/pinia'

import App from '@/layout/App.vue'

import './permission'

import 'normalize.css'

import '@/assets/style/index.scss'

// 引入全局样式
import '@/styles/index.scss'

// 创建实例
async function setupAll() {
  const app = createApp(App)

  await extendI18n(app)

  extendPinia(app)

  extendRouter(app)

  app.mount('#app')
}

setupAll()
