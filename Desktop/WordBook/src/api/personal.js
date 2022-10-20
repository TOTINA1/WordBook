import axios from './axios'
export default {

  loginUser (data) {
    return axios.post('/loginUser', data)
  },
  loginCode (data) {
    return axios.post('/loginCode', data)
  },
  phone (data) {
    return axios.get('/phone', data)
  },
  code (phone) {
    return axios.post('/code', {
      phone
    })
  },
  codeReg (data) {
    return axios.post('/codeReg', data)
  },
  register (data) {
    return axios.post('/register', data)
  }
  // checkCode (phone, code) {
  //   return axios.post('/user/checkCode', {
  //     phone,
  //     code
  //   })
  // },
  // register (option = {}) {
  //   return axios.post('/user/register', option)
  // },
  // loginPOST (accout, pwd, type = 1) {
  //   return axios.post('/user/login', {
  //     accout,
  //     pwd,
  //     type
  //   })
  // }
}
