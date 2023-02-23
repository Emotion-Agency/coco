<script lang="ts" setup>
interface iProps {
  src: string
  imgClass?: string
  scale?: number
  alt?: string
  width?: number
  height?: number
  storyblok?: boolean
}

withDefaults(defineProps<iProps>(), {
  scale: 1.07,
})
</script>

<template>
  <div class="p-img-wrapper">
    <div data-parallax="0.06" class="p-img-container">
      <TheImg
        :src="src"
        class="parallax-img"
        :class="imgClass"
        data-parallax="0.06"
        :storyblok="storyblok"
        :data-scale="scale"
        :width="width"
        :height="height"
      />
    </div>
  </div>
</template>
