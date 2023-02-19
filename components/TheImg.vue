<script lang="ts" setup>
interface iProps {
  src: string
  storyblok?: boolean
  imgx?: boolean
  width?: number
  height?: number
}

const props = defineProps<iProps>()

const imageSource = computed(() => {
  return props.storyblok
    ? useStoryblokImage(props.src, {
        size: `${props.width || 0}x${props.height || 0}`,
        imgix: props.imgx,
      })
    : props.src
})
</script>

<template>
  <img :src="imageSource" />
</template>
