<!--
 * @FilePath: \institution-knowledge\src\layout\LevitatedSphereConfig\module\LevitatedSphereInput.vue
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-08 17:39:06
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 10:03:43
 * @Description:
-->
<script setup>
// 引入依赖，变量声明
const { proxy } = getCurrentInstance()
const searchValue = ref('')
// watch api/vue生命周期钩子等

// 自定义方法
function handleEnterEvent() {
  proxy.$router.push({ name: 'ResultsTreatise', params: { searchValue: unref(searchValue) } })
}
</script>

<template>
  <ElInput v-model="searchValue" placeholder="请输入搜索内容" @keyup.enter="handleEnterEvent" />
</template>

<style scoped lang='scss'>

</style>
