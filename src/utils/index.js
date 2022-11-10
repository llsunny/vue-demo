
/**
 * 接口数据formate树形控件数据格式   树形控件数据formate接口数据格式
 * @param {Object}   source    转换的数据对象
 * @param {Array}   convertList      递归映射关系
 * @param  {Function}  middleWare       需要添加的字段
 * @param  {Array}  formatterArray       递归对象数组
 */
export function treeFormatter (source, convertList, middleWare, formatterArray) {
  const treeFormatterHelper = (source, deep, result) => {
    if (deep >= convertList.length) return source
    const handleConvert = (item, convertObj, deep) => {
      middleWare && middleWare(item, deep)
      return Object.keys(item).reduce((prev, key) => {
        if (Object.keys(convertObj).includes(key)) {
          if (formatterArray.includes(convertObj[key])) {
            prev[convertObj[key]] = treeFormatterHelper(
              item[key],
              deep + 1
            )
          } else {
            prev[convertObj[key]] = item[key]
          }
        } else {
          prev[key] = item[key]
        }
        return prev
      }, {})
    }
    const convertObj = convertList[deep]
    if (deep === 0) {
      result.push(handleConvert(source.data || source, convertObj, deep))
    } else {
      return source.map(item => handleConvert(item, convertObj, deep))
    }
  }
  const result = []
  treeFormatterHelper(source, 0, result)
  return result
}



// 根据出生日期获取年龄
export function getAge(strAge) {
  var birArr = strAge.split('-')
  var birYear = birArr[0]
  var birMonth = birArr[1]
  var birDay = birArr[2]

  d = new Date()
  var nowYear = d.getFullYear()
  var nowMonth = d.getMonth() + 1 //记得加1
  var nowDay = d.getDate()
  var returnAge

  if (birArr == null) {
    return false
  }
  var d = new Date(birYear, birMonth - 1, birDay)
  if (
    d.getFullYear() == birYear &&
    d.getMonth() + 1 == birMonth &&
    d.getDate() == birDay
  ) {
    if (nowYear == birYear) {
      var diffMonthCount = nowMonth - birMonth
      if (diffMonthCount > 0) {
        var diffDayCount = nowDay - birDay
        if (diffDayCount < 0) {
          returnAge = diffMonthCount - 1 + '个月'
        } else {
          returnAge = diffMonthCount + '个月'
        }
      } else {
        returnAge = 0 + '岁' //
      }
    } else {
      var ageDiff = nowYear - birYear //
      if (ageDiff > 0) {
        if (nowMonth == birMonth) {
          var dayDiff = nowDay - birDay //
          if (dayDiff < 0) {
            returnAge = ageDiff - 1 + '岁'
          } else {
            returnAge = ageDiff + '岁'
          }
        } else {
          var monthDiff = nowMonth - birMonth //
          if (monthDiff < 0) {
            returnAge = ageDiff - 1 + '岁'
          } else {
            returnAge = ageDiff + '岁'
          }
        }
      } else {
        return '出生日期晚于今天，数据有误' //返回-1 表示出生日期输入错误 晚于今天
      }
    }
    return returnAge
  } else {
    return '输入的日期格式错误！'
  }
}