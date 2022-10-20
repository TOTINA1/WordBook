import axios from './axios'
export default {
  queryWord () {
    return axios.get('/queryWord')
  },
  updWord (data) {
    return axios.post('/updWord', data)
  },
  changePwd (data) {
    return axios.post('/changePwd', data)
  },
  addWord (data) {
    return axios.post('/addWord', data)
  }
}
