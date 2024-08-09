/*
 * @FilePath: \institution-knowledge\src\layout\LevitatedSphereConfig\module\index.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-08 16:44:39
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 15:04:56
 * @Description:
 */
import LevitatedSphereInput from './LevitatedSphereInput.vue'
import LevitatedSphereTitle from './LevitatedSphereTitle.vue'
import FluentSearchSparkle32Filled from '~icons/fluent/search-sparkle-32-filled'
import FluentPersonChat20Regular from '~icons/fluent/person-chat-20-regular'
import FluentCalendarEdit32Light from '~icons/fluent/calendar-edit-32-light'
import { useRouter } from '@/router/useRouter'

const router = useRouter()

export default [
  {
    popover: markRaw(LevitatedSphereInput),
    icon: markRaw(FluentSearchSparkle32Filled),
    handleClick: () => {
      // 这块设计有问题 还需要完善 仿照系统会将searchValue 一块带过去
      router.push({ name: 'ResultsTreatise', params: { searchValue: '' } })
    },
    params: {},
  },
  {
    popover: markRaw(LevitatedSphereTitle),
    icon: markRaw(FluentPersonChat20Regular),
    handleClick: () => {},
    params: {
      title: '成果认领',
    },
  },
  {
    popover: markRaw(LevitatedSphereTitle),
    icon: markRaw(FluentCalendarEdit32Light),
    handleClick: () => {},
    params: {
      title: '成果填报',
    },
  },
]
