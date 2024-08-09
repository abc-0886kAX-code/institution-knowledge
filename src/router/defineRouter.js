/*
 * @FilePath: \institution-knowledge\src\router\defineRouter.js
 * @Author: maggot-code
 * @Date: 2022-11-03 09:41:56
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 17:18:30
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export function setupRouter(routes) {
  return createRouter({
    history: createWebHashHistory('/'),
    scrollBehavior: () => ({ left: 0, top: 0 }),
    mode: 'hash',
    routes: Array.isArray(routes) ? routes : [],
  })
}

export function defineRouter(routes) {
  const core = setupRouter(routes)

  function reset() {
    const router = setupRouter(routes)
    core.matcher = router.matcher
  }
  function use(Vue) {
    console.log(setupRouter(routes));
    
    Vue.use(setupRouter(routes))
  }

  return {
    core,
    reset,
    use,
  }
}

export default defineRouter
