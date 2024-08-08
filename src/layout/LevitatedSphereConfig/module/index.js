import LevitatedSphereInput from './LevitatedSphereInput.vue'
import LevitatedSphereTitle from './LevitatedSphereTitle.vue'
import FluentSearchSparkle32Filled from '~icons/fluent/search-sparkle-32-filled'
import FluentPersonChat20Regular from '~icons/fluent/person-chat-20-regular'
import FluentCalendarEdit32Light from '~icons/fluent/calendar-edit-32-light'

export default [
  {
    popover: markRaw(LevitatedSphereInput),
    icon: markRaw(FluentSearchSparkle32Filled),
    handleClick: () => {},
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
