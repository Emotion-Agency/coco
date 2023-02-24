import { API_URL } from '~~/api/axiosInstance'

export const useImageProxy = () => {
  const prepareImage = (url: string) => {
    const encodedImageUrl = encodeURIComponent(url)

    return `${API_URL}/image/proxy?url=${encodedImageUrl}`
  }

  return { prepareImage }
}
