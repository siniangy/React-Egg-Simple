import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//127.0.0.1:7001' : '//127.0.0.1:7001';

axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    console.error('数据格式响应错误:', res.data)
    return Promise.reject(res)
  }
  return res.data
})

export default axios