<!--
 * @FilePath: \institution-knowledge\src\biz\LevitatedSphere\LevitatedSphere.vue
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-07 17:10:00
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-08 17:42:06
 * @Description:
-->
<script setup>
// 引入依赖，变量声明
import { defineLevitatedSphere } from './usecase/defineLevitatedSphere.js'
import LevitatedSphereConfig from '@/layout/LevitatedSphereConfig/LevitatedSphereConfig.vue'

const props = defineProps({
  provideName: String,
})
const controlState = ref(false)
const levitatedSphereStyle = computed(() => {
  return unref(controlState)
    ? {
        right: '16px',
      }
    : {}
})

const { source } = defineLevitatedSphere(props.provideName)
// watch api/vue生命周期钩子等
// 自定义方法
function popupNav() {
  controlState.value = !unref(controlState)
}
function setPopoverItem(index) {
  return {
    top: `${(index + 1) * -30 + (index * -65)}px`,
  }
}
</script>

<template>
  <LevitatedSphereConfig>
    <slot />
  </LevitatedSphereConfig>
  <div class="levitated-sphere" :style="levitatedSphereStyle">
    <div v-if="!controlState" class="levitated-sphere-controlbtn" @click="popupNav">
      <IconFluentChevronCircleLeft20Regular class="levitated-sphere-controlbtn-icon" />
    </div>
    <div v-if="controlState" class="levitated-sphere-popupnav">
      <div class="levitated-sphere-popupnav-item" @click="popupNav">
        <IconFluentChevronCircleRight20Regular class="levitated-sphere-popupnav-item-icon" />
      </div>

      <template v-for="(item, index) in source" :key="index">
        <ElPopover trigger="hover" placement="right" :width="160">
          <div class="levitated-sphere-popupnav-other">
            <component :is="item.popover" v-bind="item.params" />
          </div>
          <template #reference>
            <div class="levitated-sphere-popupnav-item" :style="setPopoverItem(index)">
              <component :is="item.icon" class="levitated-sphere-popupnav-item-icon" @click="item.handleClick" />
            </div>
          </template>
        </ElPopover>
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.levitated-sphere {
  z-index: 2;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: auto;
  height: auto;
  position: absolute;
  transition: .3s ease;

  &-controlbtn {
    position: relative;
    top: 0;
    left: 0;
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 50% 0 0 50%;
    line-height: 45px;
    text-align: center;
    color: #000;
    transition: .3s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .16);
    cursor: pointer;

    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }

  &-controlbtn,
  &-popupnav-item:hover {
    background: #921d23;
    color: #fff;
  }

  &-popupnav {
    width: auto;
    height: auto;

    &-item {
      position: relative;
      top: 68px;
      left: 0;
      width: 45px;
      height: 45px;
      background-color: #fff;
      border-radius: 50%;
      line-height: 45px;
      text-align: center;
      color: #000;
      transition: .3s ease;
      box-shadow: 0 5px 10px rgba(0, 0, 0, .16);
      cursor: pointer;

      &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
      }

      &-other {
        width: auto;
        height: auto;
      }
    }
  }

}
</style>
