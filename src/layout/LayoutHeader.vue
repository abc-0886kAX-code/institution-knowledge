<!--
 * @FilePath: \institution-knowledge\src\layout\LayoutHeader.vue
 * @Author: abc-0886kAX-code
 * @Date: 2024-07-31 14:55:02
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 13:55:32
 * @Description:
-->
<script setup>
import MenuItem from './menu-item.vue'
import { useMenu } from '@/hooks/useMenu.js'
import { routes } from '@/router/useRouter.js'
import { usePopup } from '@/biz/Popup/usecase/usePopup'

const popup = usePopup()
const dialog = popup.define({
  template: defineAsyncComponent(() => import('./Assist.vue')),
  title: '123',
  width: '40%',
  height: '40vh',
})

const { proxy } = getCurrentInstance()
const menu = useMenu()
const defaultActive = computed(() => {
  return proxy.$route.name
})
function routerSelect(routeName) {
  const routeOptions = { name: routeName }
  proxy.$router.push(routeOptions)
}

function handleLogin() {
  proxy.$router.push({ name: 'login' })
}
function handleAssist() {
  dialog.show()
}
function goToHomePage() {
  if (unref(defaultActive) !== 'Home') {
    proxy.$router.push({ name: 'Home' })
  }
}

const menuList = computed(() => {
  return routes.find(item => item.name === 'layout').children
})
</script>

<template>
  <div class="layout-header">
    <div class="layout-header-logo" @click="goToHomePage">
      <img src="@/assets/images/top-logo.png" alt="">
    </div>
    <div class="layout-header-menu">
      <el-menu :default-active="defaultActive" :ellipsis="false" mode="horizontal" unique-opened @select="routerSelect">
        <template v-for="cell in menuList" :key="cell.name">
          <MenuItem v-if="menu.renderSubmenu(cell)" :cell="cell" />

          <el-menu-item v-else-if="menu.renderMenu(cell)" :index="cell.name">
            <span>{{ menu.getTitle(cell) }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="layout-header-useroperate">
      <ElLink class="layout-header-useroperate-item" @click="handleLogin">
        <IconMaterialSymbolsAccountCircle class="layout-header-useroperate-item-icon" />登录
      </ElLink>
      <ElLink class="layout-header-useroperate-item" @click="handleAssist">
        <IconEpQuestionFilled class="layout-header-useroperate-item-icon" /> 帮助
      </ElLink>
      <ElLink class="layout-header-useroperate-item">
        <LocaleDropdown />
      </ElLink>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.layout-header {
  width: 100%;
  height: 100%;
  max-width: 1420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  &-logo {
    height: 60px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-menu {
    margin-left: auto;
    margin-right: 0;

    & {
      --el-menu-text-color: #000;
      --el-menu-hover-text-color: #fff;
      --el-menu-bg-color: transparent;
      --el-menu-hover-bg-color: transparent;
      --el-menu-active-color: #000;
    }

    .el-menu--horizontal.el-menu {
      border-bottom: 0;
    }

    .el-menu-item {
      padding: 0;
      margin: 0 24px;
      color: #333;
      font-weight: 500;
      font-size: 18px;
      // height: 48px;
      line-height: 48px
    }

    .el-menu-item.is-active {
      color: var(--text-active-color) !important;
      border-bottom: 2px solid var(--text-active-color)
    }

    .el-menu-item.is-active::hover {
      color: #fff;
      border-bottom: 2px solid var(--text-active-color);
      position: relative
    }

    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      color: #000;
      background-color: transparent !important;
    }

    .el-menu-item.is-active::hover::before {
      content: "";
      width: calc(100% + 40px);
      height: 48px;
      background: rgba(2, 2, 2, .062745098);
      position: absolute;
      left: -20px
    }

  }

  &-useroperate {
    display: flex;
    justify-content: flex-end;

    &-item {
      height: 38px;
      font-size: 16px;
      font-weight: 400;
      line-height: 38px;
      color: var(--text-active-color);
      margin-left: 20px;

      &-icon {
        margin-right: 5px;
        font-size: 20px;
      }
    }

    :deep(.el-link.el-link--default:after) {
      border-color: var(--text-active-color);
    }
  }
}
</style>
