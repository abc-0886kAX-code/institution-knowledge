<!--
 * @FilePath: \institution-knowledge\src\layout\Home.vue
 * @Author: zhangxin
 * @Date: 2023-04-12 13:14:28
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-08 16:21:37
 * @Description:
-->
<script setup>
import LayoutHeader from './LayoutHeader.vue'
import LayoutFooter from './LayoutFooter.vue'
import MenuItem from './menu-item.vue'
import LevitatedSphere from '@/biz/LevitatedSphere/LevitatedSphere.vue'
import { useMenu } from '@/hooks/useMenu.js'
import { routes } from '@/router/useRouter.js'

import Weather from '@/components/weather/weather.vue'
import { useUserStore } from '@/store/useUser'

const { proxy } = getCurrentInstance()
const user = useUserStore()
const menu = useMenu()
const defaultActive = computed(() => {
  return proxy.$route.name
})

const menuList = computed(() => {
  return routes.find(item => item.name === 'layout').children
})
function handleUser() { }
function handleCommand(command) {
  if (command === 'userLogout') {
    userLogout()
  }
}
function userLogout() {
  user.emptyUserInfo()
  proxy.$router.push({ name: 'login' })
}
function routerSelect(routeName) {
  const routeOptions = { name: routeName }
  proxy.$router.push(routeOptions)
}
</script>

<template>
  <el-container class="home">
    <el-header class="home-header">
      <LayoutHeader />
    </el-header>
    <LevitatedSphere>
      <el-main :key="defaultActive" class="home-main">
        <div class="home-main-body">
          <RouterView v-slot="{ Component }">
            <transition name="el-fade-in-linear">
              <component :is="Component" />
            </transition>
          </RouterView>
        </div>
        <el-footer class="home-main-footer">
          <LayoutFooter />
        </el-footer>
      </el-main>
    </LevitatedSphere>
  </el-container>
</template>

<style scoped lang="scss">
$HeaderHeight: 80px;
$FooterHeight: 160px;
$MainPaddingTop: $HeaderHeight;
$BodyPaddingBottom: 30px;

.home {
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: relative;

  &-header {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $HeaderHeight;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    transition: background-color .5s;
    padding: 0;
    box-sizing: border-box;
  }

  &-levitated-sphere{
    z-index: 2;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: auto;
    height: auto;
  }

  &-main {
    z-index: 1;
    width: 100%;
    height: auto;
    min-height: calc(100vh - $HeaderHeight);
    background-color: #f2f6fa;
    padding: $MainPaddingTop 0 0 0;
    box-sizing: border-box;

    &-body {
      padding: 0 0 $BodyPaddingBottom 0;
      box-sizing: border-box;
    }

    &-footer {
      height: $FooterHeight;
      background-color: #616161;
      padding: 0;
      box-sizing: border-box;
    }
  }
}

::-webkit-scrollbar,
::-webkit-scrollbar-track-piece {
  background-color: transparent
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(144, 146, 152, .3)
}
</style>
