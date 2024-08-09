/*
 * @FilePath: \institution-knowledge\src\extend\router.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:54:32
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 17:04:05
 * @Description:
 */
import router from '@/router/useRouter'
export function extendRouter(Vue) {
  router.use(Vue)
  return router.core
}

export default extendRouter
