import { API_URL } from '~~/api/axiosInstance'

type tFormat = 'jpg' | 'png' | 'webp' | 'avif' | 'auto'

export interface iImageOpts {
  width?: string | null
  height?: string | null
  quality?: string
  format?: tFormat
}

export const useImageProxy = () => {
  const prepareImage = (url: string, opts?: iImageOpts) => {
    const encodedImageUrl = encodeURIComponent(url)

    let baseURL = `${API_URL}/image/proxy?url=${encodedImageUrl}`

    if (opts) {
      Object.keys(opts).forEach(key => {
        baseURL += `&${key}=${opts[key]}`
      })
    }

    return baseURL
  }

  return { prepareImage }
}
