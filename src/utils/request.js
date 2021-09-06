
import axios from 'axios'

// 每次请求携带cookies信息
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

// create an axios instance
const service = axios.create({
  //baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL:'http://150.158.185.96:8081/api/',
  timeout: 5000, // request timeout
  async:true,
  crossDomain:true,
})

// request interceptor
service.interceptors.request.use(
    config => {

      return config;
    },
    error => {
      return Promise.reject(error)
    }
)


// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      console.log('返回值为',response)
      const res = response.data
      // if the custom code is not 200, it is judged as an error.
      if (res.errorCode != 200) {

        return Promise.reject(new Error(res.msg || 'Error'))
      } else {
        return res
      }
    },
    error => {
      return Promise.reject(error)
    }

)

export default service