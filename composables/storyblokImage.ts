import ImgixClient from '@imgix/js-core'

interface iOpts {
  format?: 'webp' | 'jpg' | 'png' | null
  quality?: number
  size?: string
  imgix?: boolean
}

export const useStoryblokImage = (image: string, options: iOpts = {}) => {
  if (!image) return ''

  const config = useRuntimeConfig()
  const imgix = new ImgixClient({
    domain: config.public.IMGIX_DOMAIN,
    secureURLToken: config.public.IMGIX_KEY,
  })

  const imgixTransform = (url: string) => imgix.buildURL(url, {})

  const filters = `filters:quality(${options.quality}):format(${options.format})`
  const size = options.size ?? null

  const imageService = 'https://a-us.storyblok.com'
  const path = image.replace(imageService, '')

  const customPath = size ? '/m/' + size + '/' + filters : '/m/' + filters

  return options?.imgix
    ? imgixTransform(imageService + path + customPath)
    : imageService + path + customPath
}
