import $api from './axiosInstance'

export default class InstagramService {
  static getPost = async (postUrl: string) => {
    const res = await $api.get(`/instagram/get-media?post_url=${postUrl}`)
    return res
  }
}

// http://localhost:5001/api/instagram/get-media?post_id=CYJXVm4g_PK
