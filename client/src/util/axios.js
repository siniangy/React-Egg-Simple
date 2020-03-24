import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//127.0.0.1:7001' : '';

axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  console.log(res);
  debugger;
  if (typeof res.data !== 'object') {
    console.error('数据格式响应错误:', res.data)
    Toast.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.status != 200) {
    if (res.data.message) Toast.error(res.data.message)
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios