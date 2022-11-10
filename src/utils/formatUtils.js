/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \mobile-office\src\utils\formatUtils.js
 * @
 */
// import MD5 from './MD5'
// import CryptoJS from 'crypto-js'

export default {
  /**
   * @description: 设置浏览器标签页标题
   * @param {*} text
   * @return {*}
   */
  setTitle(text) {
    document.title = text
  },
  // /**
  //  * @description: 返回-是否包含#{}中的数据
  //  * @param {*}
  //  * @return {*}
  //  */
  // getIsHaveHashJson() {
  //   let _hash = decodeURIComponent(location.hash)
  //   let regex = /([^{}](?=.*})(?!.*{))+/
  //   let _arr = null
  //   _arr = regex.exec(_hash)
  //   if (_arr) {
  //     return true
  //   } else {
  //     return false
  //   }
  // },

  // keyStr: 'J1gvfdiJmRtKnkEj',
  // // 加密
  // Encrypt(word) {
  //   const key = CryptoJS.enc.Utf8.parse(this.keyStr)
  //   const srcs = CryptoJS.enc.Utf8.parse(word)
  //   const encrypted = CryptoJS.AES.encrypt(srcs, key, {
  //     mode: CryptoJS.mode.ECB,
  //     padding: CryptoJS.pad.Pkcs7
  //   })
  //   return encrypted.toString()
  // },
  // // 解密
  // Decrypt(word) {
  //   const key = CryptoJS.enc.Utf8.parse(this.keyStr)
  //   const decrypt = CryptoJS.AES.decrypt(word, key, {
  //     mode: CryptoJS.mode.ECB,
  //     padding: CryptoJS.pad.Pkcs7
  //   })
  //   return CryptoJS.enc.Utf8.stringify(decrypt).toString()
  // },
  // 获取url问号后面的参数并进行解密，返回obj
  // getUrlHashDecrypt(newUrl) {
  //   let url = ''
  //   if (newUrl) {
  //     url = newUrl
  //   } else {
  //     url = location.href
  //   }
  //   const paramsArr = url.split('?')
  //   let params = paramsArr[1]
  //   let obj = {}
  //   if (!this.isEmpty(params)) {
  //     params = decodeURIComponent(paramsArr[1])
  //     const regExp = new RegExp(' ', 'gm')
  //     params = params.replace(regExp, '+')
  //     const DecryptStr = this.Decrypt(params)
  //     const arr = DecryptStr.split('&')
  //     for (let i = 0; i < arr.length; i++) {
  //       let item = arr[i].split('=')
  //       let key = item[0]
  //       let value = item[1]
  //       obj[key] = value
  //     }
  //   }
  //   return obj
  // },
  // /**
  //  * @description: 获取url 问号后面的字符串,进行解密，然后组成新的链接
  //  * @param {*}
  //  * @return {*}
  //  */
  // getUrlHashStr() {
  //   let fullUrl
  //   let index = location.href.indexOf('?') // 获取问号在链接中的位置
  //   if (index > -1) {
  //     let str = location.href.substr(index + 1) // 截取问号后面的字符串
  //     str = decodeURIComponent(str)
  //     let baseUrl = location.href.substr(0, index) // 截取问号前面的字符串
  //     let DecryptStr = this.Decrypt(str) // 解密问号后面的字符串
  //     if (this.isEmpty(DecryptStr)) {
  //       DecryptStr = str
  //     }
  //     fullUrl = `${baseUrl}?${DecryptStr}` // 拼接成完成的链接
  //   } else {
  //     fullUrl = location.href
  //   }
  //   return fullUrl
  // },
  // /**
  //  * @description: 地址中包含#{}结构的json数据后的其他普通get参数获取
  //  * @param {*} id
  //  * @return {*}
  //  */
  // getHardUrlParam(id) {
  //   let baseUrl = ''
  //   let index = location.hash.indexOf('?') // 获取问号字符的位置
  //   if (index > -1) {
  //     let str = location.hash.substr(index + 1) // 问号后面的字符串
  //     let fontUrl = location.hash.substr(0, index) // 截取问号前面的字符串
  //     let decryptStr = this.Decrypt(str) // 解密问号后面的字符串
  //     baseUrl = `${fontUrl}?${decryptStr}` // 拼接完整的location.hash
  //   } else {
  //     baseUrl = location.hash
  //   }
  //   let _hash = decodeURIComponent(baseUrl)
  //   // let _hash = decodeURIComponent(location.hash)
  //   // let regex = /#([^{}](?=.*})(?!.*{))+/    //取普通get  url上的参数------>输出  #/service/examintion?patname=%E5%B1%88%E6%B0%B8%E6%81%92&patsex=%E7%94%B7&headerVal=book&idnum=411025199509097534&phone=15939963306"
  //   let _arr = _hash.split('#{')[0].concat(_hash.split('}')[1])
  //   let param = null
  //   param = _arr.split(id + '=')
  //   if (param != null && param[1] != null) {
  //     param = param[1].split('&')[0]
  //     param = param.split('#')[0]
  //     return param
  //   }
  //   return null
  // },
  // /**
  //  * @description: 获取URL参数
  //  * @param {*} id
  //  * @return {*}
  //  */
  // getUrlParam(id) {
  //   // let url = this.getUrlHashStr()
  //   let param = window.location.href.split(id + '=')
  //   // let param = url.split(id + '=')
  //   if (param != null && param[1] != null) {
  //     param = param[1].split('&')[0]
  //     param = param.split('#')[0]
  //     return decodeURI(param)
  //   }
  //   return null
  // },
  /**
   * @description: 两个日期间隔YYYY-MM-DD
   * @param {*} start
   * @param {*} end
   * @return {*}
   */
  getBetweenDateStr(start, end) {
    var result = []
    var beginDay = start.split('-')
    var endDay = end.split('-')
    var diffDay = new Date()
    var dateList = new Array()
    var i = 0
    diffDay.setDate(beginDay[2])
    diffDay.setMonth(beginDay[1] - 1)
    diffDay.setFullYear(beginDay[0])
    result.push(start)
    while (i == 0) {
      var countDay = diffDay.getTime() + 24 * 60 * 60 * 1000
      diffDay.setTime(countDay)
      dateList[2] = diffDay.getDate()
      dateList[1] = diffDay.getMonth() + 1
      dateList[0] = diffDay.getFullYear()
      if (String(dateList[1]).length == 1) {
        dateList[1] = '0' + dateList[1]
      }
      if (String(dateList[2]).length == 1) {
        dateList[2] = '0' + dateList[2]
      }
      result.push(dateList[0] + '-' + dateList[1] + '-' + dateList[2])
      if (
        dateList[0] == endDay[0] &&
        dateList[1] == endDay[1] &&
        dateList[2] == endDay[2]
      ) {
        i = 1
      }
    }
    // console.log(result);
    return result
  },
  // 获取url 问号后面的参数转换成对象
  // queryString() {
  //   let hashStr = location.href.split('?')[1]
  //   let hashArr = hashStr.split('&')
  //   let obj = {}
  //   for (let i = 0; i < hashArr.length; i++) {
  //     let item = hashArr[i].split('=')
  //     let key = item[0]
  //     let value = item[1]
  //     obj[key] = value
  //   }
  //   return obj
  // },
  // /**
  //  * @description: 用于后台接口入参加密
  //  * @param {*} text
  //  * @return {*}
  //  */
  // md5Signature(data) {
  //   let keys = []
  //   for (let key in data) {
  //     keys.push(key.toString())
  //   }
  //   keys.sort()
  //   let arr = []
  //   for (let i = 0; i < keys.length; i++) {
  //     arr.push(data[keys[i]])
  //   }
  //   let str = MD5.hex_md5(arr.join('') + 'WinningSoftPatientService')
  //   return str
  // },
  /**
   * @description: 根据key获取obj中key值
   * @param {*} text
   * @return {*}
   */
  getValFormObj(key, obj) {
    if (
      this.isEmpty(obj) ||
      (typeof obj[key] !== 'boolean' && this.isEmpty(obj[key]))
    ) {
      return '--'
    }
    return obj[key]
  },
  //去除前后空格
  delStrSpaceLR(str) {
    if (str) {
      return str.replace(/(^\s*)|(\s*$)/g, '')
    }
    return ''
  },
  /**
   * @description: 创建一个从 object 中选中的属性的对象
   * @param {*} obj
   * @param {*} arr
   * @return {*}
   */
  pick(obj, arr) {
    arr = arr.reduce((iter, val) => {
      if (val in obj) {
        iter[val] = obj[val]
      }
      return iter
    }, {})
    return arr
  },
  /**
   * @description: 查找对象中某字段对应的值是否为空
   * @param {*} key
   * @param {*} obj
   * @return {*}
   */
  isEmptyByStr(key, obj) {
    if (this.isEmpty(obj)) return true
    if (this.isEmpty(key)) return true

    let type = typeof obj[key]
    if (type === 'boolean' || type === 'number') return false
    if (type === 'string' || type === 'object') {
      return false
    } else if (this.isEmpty(obj[key])) return true
    return false
  },
  /**
   * @description: 判断是否为空
   * @param {*} text
   * @return {*}
   */
  isEmpty(obj) {
    if (obj == null) {
      //null类型为'object'
      return true
    }
    let _type = typeof obj
    if (_type === 'string') {
      //字符串
      if (obj.length == 0) return true
      return false
    } else if (_type === 'number' || _type === 'boolean') {
      //数字  //bool
      return false
    } else if (_type == 'object') {
      if (Array.isArray(obj)) {
        //数组
        if (obj.length == 0) return true
        return false
      } else {
        for (let key in obj) {
          return false
        }
        return true
      }
    } else if (_type === 'undefined') {
      //Undefined
      return true
    }
    return false
  },
  /**
   * @description: 判断字符串是否为数字
   * @param {*} val
   * @return {*}
   */

  isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/ //非负浮点数（正浮点数 + 0）
    var refPos1 = /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/ //非正浮点数（负浮点数 + 0）
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ //负浮点数
    if (regPos.test(val) || regNeg.test(val) || refPos1.test(val)) {
      return true
    } else {
      return false
    }
  },
  //传年份--》返回该年份始末时间戳
  getYearTime(year) {
    let times = []
    let date_s = new Date(year, 0, 1).getTime()
    let date_e = new Date(year, 11, 31, 23, 59, 59, 0).getTime()
    times = [date_s / 1000, date_e / 1000]
    // console.log('times_____',year, times)
    return times
  },
  // 获取随机四位数
  rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  },
  /**
   * @description:节流
   * @param {*} func 函数
   * @param {*} delay 延迟执行毫秒数
   * @return {*}
   */
  throttle(func, delay) {
    let last, deferTimer
    return function() {
      let that = this
      let _args = arguments
      let now = +new Date()
      if (last && now < last + delay) {
        clearTimeout(deferTimer)
        deferTimer = setTimeout(() => {
          last = now
          func.apply(that, _args)
        }, delay)
      } else {
        last = now
        func.apply(that, _args)
      }
    }
  },
  /**
   * @description: 防抖
   * @param {*} func 函数
   * @param {*} delay 延迟执行毫秒数
   * @return {*}
   */
  debounce(func, delay=500) {
    let deferTimer
    return function() {
      let _args = arguments
      let that = this
      if (deferTimer) clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        func.apply(that, _args)
      }, delay)
    }
  },
  // 计算时间范围，最近一周、一个月 时间戳
  getDayRange(day) {
    let startTimeStr
    let targetday_milliseconds
    let rangeTimes
    if (day === -1) {
      startTimeStr = new Date(new Date().toLocaleDateString()).getTime()
      targetday_milliseconds = startTimeStr + 1000 * 60 * 60 * 24 - 1
      targetday_milliseconds = new Date(targetday_milliseconds).Format(
        'yyyy-MM-dd hh:mm:ss'
      )
      startTimeStr = new Date(startTimeStr).Format('yyyy-MM-dd hh:mm:ss')
      rangeTimes = { BeginTime: startTimeStr, EndTime: targetday_milliseconds }
    } else {
      startTimeStr = new Date(new Date().getTime()).setHours(23, 59, 59)
      targetday_milliseconds = startTimeStr - 1000 * 60 * 60 * 24 * day
      targetday_milliseconds = new Date(targetday_milliseconds).setHours(
        0,
        0,
        0
      )
      targetday_milliseconds = new Date(targetday_milliseconds).Format(
        'yyyy-MM-dd hh:mm:ss'
      )
      startTimeStr = new Date(startTimeStr).Format('yyyy-MM-dd hh:mm:ss')
      rangeTimes = {
        BeginTime: targetday_milliseconds,
        EndTime: startTimeStr
      }
    }
    return rangeTimes
  }
}