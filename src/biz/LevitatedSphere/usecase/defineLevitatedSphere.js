/*
 * @FilePath: \institution-knowledge\src\components\LevitatedSphere\usecase\defineLevitatedSphere.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-08 15:27:51
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-08 15:40:50
 * @Description:
 */

export const SYMBOLE = Symbol('LEVITATEDSPHERE_SYMBOLE')

function provideLevitatedSphere(key,wrap) {
  provide(key ?? SYMBOLE, wrap)
  return wrap
}

export function defineLevitatedSphere(key) {
  const config = ref({})
  const source = ref([])

  function setElementConfig(props) {
    config.value = props
  }
  function setElementSource(params) {
    source.value = params
  }
  return provideLevitatedSphere(key,{
    config,
    source,
    setElementConfig,
    setElementSource,
  })
};
export default defineLevitatedSphere
