import axios from 'axios'

const http = axios.create({
    baseURL: 'http://157.230.98.10:26659', 
    timeout: 3000 
})

http.interceptors.request.use(config => {
   return config 
}, err => {
  Promise.reject(err)
})

http.interceptors.response.use(res => {
    console.log(res)
   return Promise.resolve(res)
}, err => {
    Promise.reject(err)
})

export default http