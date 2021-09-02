
import axios from 'axios'

// 每次请求携带cookies信息
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

// create an axios instance
const service = axios.create({
  //baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL:'http://47.100.225.207:8081/api/',
  timeout: 5000, // request timeout
  async:true,
  crossDomain:true,
})

// request interceptor
service.interceptors.request.use(
    config => {
      // do something before request is sent
      if (localStorage.getItem('Authorization')) {
        config.headers.Token = localStorage.getItem('Authorization');
        console.log('本次request请求传递了token信息')
      }

      return config;
    },
    error => {
      // do something with request error
      console.log(error) // for debug
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