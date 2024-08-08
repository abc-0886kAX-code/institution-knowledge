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
    {{ title }}
  </div>
</template>

<style scoped lang='scss'>
.levitated-sphere-title{
  cursor: pointer;
}
</style>
