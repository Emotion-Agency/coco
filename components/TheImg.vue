<script lang="ts" setup>
import ImgixClient from '@imgix/js-core'

interface iProps {
  src: string
  storyblok?: boolean
  imgx?: boolean
  width?: number
  height?: number
  alt?: string
  format?: 'webp' | 'jpg' | 'png' | null
  quality?: number
}

const props = withDefaults(defineProps<iProps>(), {
  alt: 'Relive by Coco',
  width: 0,
  height: 0,
  format: 'webp',
  quality: 90,
})

const imageSource = computed(() => {
  if (props.storyblok) {
    return useStoryblokImage(props.src, {
      size: `${props.width}x${props.height}`,
      imgix: props.imgx,
      format: props.format,
      quality: props.quality,
    })
  }
  if (props.imgx) {
    const config = useRuntimeConfig()
    const imgix = new ImgixClient({
      domain: config.public.IMGIX_DOMAIN,
      secureURLToken: config.public.IMGIX_KEY,
    })

    const imgixTransform = (url: string) => imgix.buildURL(url, {})
    return imgixTransform(props.src)
  }
  return props.src
})
</script>

<template>
  <img :src="imageSource" :alt="alt" />
</template>
