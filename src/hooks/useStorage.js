/*
 * @FilePath: \institution-knowledge\src\hooks\useStorage.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-09 16:47:16
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-09 16:48:44
 * @Description:
 */
// 获取传入的值的类型
function getValueType(value) {
  const type = Object.prototype.toString.call(value)
  return type.slice(8, -1)
}

export function useStorage(type = 'sessionStorage') {
  const setStorage = (key, value) => {
    const valueType = getValueType(value)
    window[type].setItem(key, JSON.stringify({ type: valueType, value }))
  }

  const getStorage = (key) => {
    const value = window[type].getItem(key)
    if (value) {
      const { value: val } = JSON.parse(value)
      return val
    }
    else {
      return value
    }
  }

  const removeStorage = (key) => {
    window[type].removeItem(key)
  }

  const clear = (excludes) => {
    // 获取排除项
    const keys = Object.keys(window[type])
    const defaultExcludes = ['dynamicRouter', 'serverDynamicRouter']
    const excludesArr = excludes ? [...excludes, ...defaultExcludes] : defaultExcludes
    const excludesKeys = excludesArr ? keys.filter(key => !excludesArr.includes(key)) : keys
    // 排除项不清除
    excludesKeys.forEach((key) => {
      window[type].removeItem(key)
    })
    // window[type].clear()
  }

  return {
    setStorage,
    getStorage,
    removeStorage,
    clear,
  }
}
