<!--
 * @FilePath: \institution-knowledge\src\layout\LevitatedSphereConfig\LevitatedSphereConfig.vue
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-08 15:56:15
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-08 16:47:11
 * @Description:
-->
<script setup>
// 引入依赖，变量声明
import LevitatedSphereList from './module'
import { useLevitatedSphere } from '@/biz/LevitatedSphere/usecase/useLevitatedSphere.js'

const { setElementSource } = useLevitatedSphere()
// watch api/vue生命周期钩子等
onMounted(() => {
  setElementSource(LevitatedSphereList)
})
// 自定义方法
</script>

<template>
  <slot />
</template>

<style scoped lang='scss'>
</style>
