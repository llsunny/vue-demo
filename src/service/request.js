import Cookies from 'js-cookie'
import HttpRequest from './axios'
const myAxios = new HttpRequest()

// myAxios.defaults.timeout = 30 * 1000
// myAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/**
 * getRequest => http get
 * @param url
 * @param params
 * @returns {*}
 */
export const getRequest = async (url, params, config = {}) => {
  try {
    let urlStr = url + `?${translateParams(params)}`
    let parameters = {
      url: params ? urlStr : url,
      method: 'get'
    }
    const data = await myAxios.request(parameters, config)
    return data.data
  } catch (error) {
    return errorHandler(error)
  }
}
/**
 * postRequest => http post
 * @param url
 * @param params
 * @returns {*}
 */
export const postRequest = async (url, params, config) => {
  // let apiUrl = ''
  // const env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'
  // if (env === 'pro') {
  //   apiUrl = url.replace('api/', '')
  // } else {
  //   apiUrl = url
  // }
  try {
    let parameters = {
      url: url,
      method: 'post',
      data: params,
      ...config
    }
    const data = await myAxios.request(parameters)
    return data.data
  } catch (error) {
    return errorHandler(error)
  }
}

/**
 * translate obj params to string with &
 * @param params
 * @returns {string}
 */
function translateParams (params) {
  let url = ''
  for (let param in params) {
    url += `${param}=${encodeURIComponent(params[param])}&`
  }
  return url.substring(0, url.length - 1)
}

export async function get (url, params) {
  try {
    const data = await getRequest(url, params)
    return data
  } catch (e) {
    return errorHandler(e)
  }
}

export async function post (url, params) {
  try {
    let headers = process.env.NODE_ENV === 'development' ? {
      'Authorization': await login(),
      'W-FLOW': Cookies.get('W-FLOW') || 'default',
      'W-SEQ': Cookies.get('W-SEQ') || '1569595974015_2',
      'ip': Cookies.get('ip') || 'http://127.0.0.1',
      'Content-Type': 'application/json'
    } : undefined
    const data = await postRequest(url, params, headers)
    return data
  } catch (e) {
    return errorHandler(e)
  }
}

// 获取token
async function login () {
  try {
    // if (!Cookies.get('BEARER_TOKEN')) {
    //   const data = await postRequest('http://172.16.6.212/base/api/v1/base/user/login',
    //     {
    //       password: '123',
    //       username: 'L10044'
    //     })
    //   document.cookie = 'BEARER_TOKEN=Bearer ' + data.data.access_token
    // }
    return Cookies.get('BEARER_TOKEN') || ''
  } catch (e) {
    return ''
  }
}

export function errorHandler (e) {
  if (e && e.code === 'ECONNABORTED') {
    return { errorType: 'timeout' }
  } else {
    return { errorType: 'networkError' }
  }
}
