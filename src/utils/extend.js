/* 这里放了一些用到的校验 判断等 方法 */
/* 验证正整数 */
export function validateNum (value) {
  const reg = /^[1-9][0-9]*$/
  return reg.test(value)
}
/*  判断是否为空 */
export function isnull (item) {
  if (item === undefined) { return true }
  if (item === null) { return true }
  if (item === '') { return true }
  if (item === 'undefined') { return true }
  if (item === 'null') { return true }
  return false
}
/* 判断是否不为空 */
export function isnotnull (item) {
  return !isnull(item)
}
