/*
 * @Author: z_ly
 * @Description:
 * @FilePath: \DoctorMobile\src\api\index.js
 * @
 */
import report from './api-config/report'
import config from '@/config'

const commonDomainArray = [ report ]
let urlObj = {}
for (let item of commonDomainArray) {
  item[Object.keys(item)[0]].domain = config.baseUrl
  // 全部整合到一个空对象里面
  Object.assign(urlObj, item)
}
const apiConfig = Object.assign(urlObj)

export default function getUrl (type, path, serve) {
  const env = process.env.NODE_ENV === 'development' ? 'dev' : 'pro'
  if (!serve) serve = 'default'
  return (`${apiConfig[type].domain[env][serve]}/${apiConfig[type].path[path]}`)
}