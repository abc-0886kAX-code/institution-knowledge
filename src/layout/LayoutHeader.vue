<script setup>
import MenuItem from './menu-item.vue'
import { useMenu } from '@/hooks/useMenu.js'
import { routes } from '@/router/useRouter.js'

const { proxy } = getCurrentInstance()
const menu = useMenu()
const defaultActive = computed(() => {
  return proxy.$route.name
})
function routerSelect(routeName) {
  const routeOptions = { name: routeName }
  proxy.$router.push(routeOptions)
}

const menuList = computed(() => {
  return routes.find(item => item.name === 'layout').children
})
</script>

<template>
  <div class="layout-header">
    <div class="layout-header-logo">
      <img src="@/assets/images/logo.png" alt="">
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
      <el-link>登录</el-link>
      <el-link>帮助</el-link>
      <el-link>中/英</el-link>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.layout-header {
  width: 100%;
  height: 100%;
  max-width:1420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  &-logo {
    height: 60px;

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
    .el-menu--horizontal.el-menu{
      border-bottom: 0;
    }
    .el-menu-item {
      padding: 0;
      margin: 0 24px;
      color: #333;
      font-weight: 500;
      font-size: 18px;
      height: 48px;
      line-height: 48px
    }

    .el-menu-item.is-active {
      color: #921d22 !important;
      border-bottom: 2px solid #921d22
    }

    .el-menu-item::hover {
      color: #fff
    }

    .el-menu-item.is-active::hover {
      color: #fff;
      border-bottom: 2px solid #921d22;
      position: relative
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

  }
}
</style>
