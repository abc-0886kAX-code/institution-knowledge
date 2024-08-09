<!--
 * @FilePath: \institution-knowledge\src\components\LocaleDropdown.vue
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-09 13:40:48
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 13:51:47
 * @Description:
-->
<script setup lang="js">
import { useLocaleStore } from '@/store/useLocale'
import { useLocale } from '@/hooks/useLocale'

const localeStore = useLocaleStore()

const langMap = computed(() => localeStore.getLocaleMap)

const currentLang = computed(() => localeStore.getCurrentLocale)

function setLang(lang) {
  if (lang === unref(currentLang).lang)
    return
  // 需要重新加载页面让整个语言多初始化
  window.location.reload()
  localeStore.setCurrentLocale({
    lang,
  })
  const { changeLocale } = useLocale()
  changeLocale(lang)
}
</script>

<template>
  <ElDropdown trigger="click" @command="setLang">
    <div class="locale-dropdown-label">
      <IconEpQuestionFilled class="locale-dropdown-label-icon" /> 中/英
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="item in langMap" :key="item.lang" :command="item.lang">
          {{ item.name }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style scoped lang='scss'>
.locale-dropdown-label {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-active-color);
  font-size: 16px;
  font-weight: 400;
  height: 50px;

  &-icon {
    margin-right: 5px;
    font-size: 20px;
  }
}
:global(.el-dropdown-menu__item:hover) {
  background-color: #fff5f5 !important;
  color: var(--text-active-color) !important;
}
</style>
