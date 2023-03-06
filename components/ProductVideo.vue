<script lang="ts" setup>
interface iProps {
  url: string
  videoClass?: string
  disabled?: boolean
}

const isPlaying = ref(false)
const $video = ref<HTMLVideoElement>(null)

const props = defineProps<iProps>()

const playHandler = () => {
  if (props.disabled) {
    return
  }

  isPlaying.value = !isPlaying.value

  isPlaying.value ? $video.value.play() : $video.value.pause()
}
</script>

<template>
  <div class="product-video">
    <button
      class="product-video__play-btn"
      aria-label="Play video button"
      @click="playHandler"
    >
      <IconsPlay v-if="!isPlaying" />
      <IconsPause v-else />
    </button>
    <video
      ref="$video"
      :src="url"
      muted
      :class="videoClass"
      :controls="isPlaying"
    ></video>
  </div>
</template>
