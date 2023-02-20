import axios from 'axios'

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:5001/api`
    : process.env.BACKEND_URL

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

// $api.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config
// })

export default $api
