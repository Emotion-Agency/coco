import axios from 'axios'

export const API_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:5001/api`
    : 'https://coco-back-production.up.railway.app/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

export default $api
