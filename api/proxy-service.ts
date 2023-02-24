import $api from './axiosInstance'

export default class ProxyService {
  static getPost = async (encodedURL: string) => {
    const res = await $api.get(`/image/proxy?url=${encodedURL}`)
    return res
  }
}
