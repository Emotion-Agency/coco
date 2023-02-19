<script lang="ts" setup>
interface iProps {
  src: string
  storyblok?: boolean
  imgx?: boolean
  width?: number
  height?: number
  alt?: string
}

const props = withDefaults(defineProps<iProps>(), {
  alt: 'Coco',
  width: 0,
  height: 0,
})

const imageSource = computed(() => {
  return props.storyblok
    ? useStoryblokImage(props.src, {
        size: `${props.width}x${props.height}`,
        imgix: props.imgx,
      })
    : props.src
})
</script>

<template>
  <img :src="imageSource" :alt="alt" />
</template>
