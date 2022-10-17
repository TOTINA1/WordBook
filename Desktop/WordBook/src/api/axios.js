import axios from 'axios'
import qs from 'qs'
// 全局配置
axios.defaults.baseURL = 'http://localhost:9999'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
// post请求
axios.defaults.headers[`Content-Type`] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = data => qs.stringify(data)

axios.interceptors.response.use(response => {
  // 只拿到响应主体信息
  return response.data
}, error => {
  if (error.response.status) {
    // 错误状态码处理
  } else {
    if (!window.navigator.onLine) {
      // 断网处理
      return
    }
    return Promise.reject(error)
  }
})
export default axios
