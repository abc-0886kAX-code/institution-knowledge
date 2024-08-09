<!--
 * @FilePath: \institution-knowledge\src\layout\App.vue
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 17:12:37
 * @Description:
-->
<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import MainLayout from '@/layout/main-layout'
import Popup from '@/layout/Popup.vue'
import ProgressMask from '@/components/ProgressMask.vue'
import { useLocaleStore } from '@/store/useLocale'
// 多语言相关
const localeStore = useLocaleStore()

const currentLocale = computed(() => localeStore.currentLocale)
</script>

<template>
  <div id="app">
    <ElConfigProvider :locale="currentLocale.elLocale">
      <ProgressMask />
      <Popup>
        <MainLayout />
      </Popup>
    </ElConfigProvider>
  </div>
</template>

<style scoped lang="scss">
</style>
