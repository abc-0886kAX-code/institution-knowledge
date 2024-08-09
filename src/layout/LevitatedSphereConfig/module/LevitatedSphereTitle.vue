<!--
 * @FilePath: \institution-knowledge\src\layout\LevitatedSphereConfig\module\LevitatedSphereTitle.vue
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-08 17:39:21
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 09:33:39
 * @Description:
-->
<script setup>
// 引入依赖，变量声明
const props = defineProps({
  title: String,
})
// watch api/vue生命周期钩子等

// 自定义方法
</script>

<template>
  <div class="levitated-sphere-title">
    {{ props.title }}
  </div>
</template>

<style scoped lang='scss'>
.levitated-sphere-title{
  cursor: pointer;
}
</style>
