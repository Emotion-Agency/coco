<script lang="ts" setup>
interface iProps {
  url: string
  videoClass?: string
  disabled?: boolean
}

const isPlaying = ref(false)
const isBtnVisible = ref(true)
const $video = ref<HTMLVideoElement>(null)

const props = defineProps<iProps>()

const playHandler = () => {
  if (props.disabled) {
    return
  }

  isPlaying.value = !isPlaying.value

  isPlaying.value ? $video.value.play() : $video.value.pause()

  isBtnVisible.value = !isPlaying.value
}
</script>

<template>
  <div
    class="product-video"
    @mouseenter="isBtnVisible = true"
    @mouseleave="isPlaying && (isBtnVisible = false)"
  >
    <button
      class="product-video__play-btn"
      :class="isBtnVisible && 'product-video__play-btn--visible'"
      aria-label="Play video button"
      @click="playHandler"
    >
      <IconsPlay v-if="!isPlaying" />
      <IconsPause v-else />
    </button>
    <video
      ref="$video"
      :src="url"
      loop
      muted
      :class="videoClass"
      :controls="isPlaying"
    ></video>
  </div>
</template>
