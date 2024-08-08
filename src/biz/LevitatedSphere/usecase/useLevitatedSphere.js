/*
 * @FilePath: \institution-knowledge\src\components\LevitatedSphere\usecase\useLevitatedSphere.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-08 15:28:17
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-08 15:40:08
 * @Description:
 */
import { SYMBOLE } from './defineLevitatedSphere'

export function useLevitatedSphere(key) {
  const entity = inject(key ?? SYMBOLE)

  return entity
}

export default useLevitatedSphere
