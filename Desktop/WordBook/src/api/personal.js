import axios from './axios'
export default {
  phone (phone) {
    return axios.post('/user/phone', {
      phone
    })
  },
  code (phone) {
    return axios.post('/user/phone', {
      phone
    })
  },
  checkCode (phone, code) {
    return axios.post('/user/checkCode', {
      phone,
      code
    })
  },
  register (option = {}) {
    return axios.post('/user/register', option)
  },
  loginPOST (accout, pwd, type = 1) {
    return axios.post('/user/login', {
      accout,
      pwd,
      type
    })
  }
}
