/*
 * @FilePath: \institution-knowledge\src\router\useRouter.js
 * @Author: zhangxin
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 18:03:35
 * @Description:
 */
import { defineRouter } from './defineRouter'
import { defineMeta } from '@/router/meta'
import { useI18n } from '@/hooks/useI18n'

const { t } = useI18n()

export const routes = [
  {
    name: 'login',
    path: '/login',
    meta: defineMeta(),
    component: () => import('@/layout/login/login.vue'),
  },
  {
    name: 'singleLogin',
    path: '/singleLogin',
    meta: defineMeta(),
    component: () => import('@/layout/loginsso/loginsso.vue'),
  },
  {
    name: 'debug',
    path: '/debug',
    meta: defineMeta(),
    component: () => import('@/pages/Debug/debug.vue'),
  },
  {
    name: 'layout',
    path: '/',
    redirect: '/Home',
    meta: defineMeta({ level: 0 }),
    component: () => import('@/layout/Home.vue'),
    children: [
      {
        path: '/Home',
        name: 'Home',
        meta: {
          title: t('router.home'),
          hidden: 'true',
        },
        component: () => import('@/pages/Home/Home.vue'),
      },
      {
        path: '/ResultsTreatise',
        name: 'ResultsTreatise',
        meta: {
          title: t('router.ResultsTreatise'),
          hidden: 'true',
        },
        component: () => import('@/pages/ResultsTreatise/ResultsTreatise.vue'),
      },
      {
        path: '/ExpertsScholars',
        name: 'ExpertsScholars',
        meta: {
          title: t('router.ExpertsScholars'),
          hidden: 'true',
        },
        component: () => import('@/pages/ExpertsScholars/ExpertsScholars.vue'),
      },
      {
        path: '/DataAnalysis',
        name: 'DataAnalysis',
        meta: {
          title: t('router.DataAnalysis'),
          hidden: 'true',
        },
        component: () => import('@/pages/DataAnalysis/DataAnalysis.vue'),
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        meta: {
          title: t('router.AboutUs'),
          hidden: 'true',
        },
        component: () => import('@/pages/AboutUs/AboutUs.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    meta: defineMeta({ title: '404' }),
    component: () => import('@/pages/NotPage/NotPage.vue'),
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404',
  },
]
const router = defineRouter(routes)

export function useRouter() {
  return router.core
}

export function useRoute() {
  return router.core.currentRoute
}

export const resetRoute = router.reset

export default router
