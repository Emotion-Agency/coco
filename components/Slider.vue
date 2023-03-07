<script setup lang="ts">
import { iImage } from '~~/types/story'

interface iProps {
  isOpened: boolean
  imagesList: iImage[]
}

const props = defineProps<iProps>()

const emit = defineEmits(['close'])

const { detectFileType } = useDetectFileType()

watch(
  () => props.isOpened,
  () => {
    if (props.isOpened) {
      window.ss.isFixed = true
    } else {
      window.ss.isFixed = false
      if (process.client) {
        const $sliderScroller = document.querySelector('.slider__wrapper')
        $sliderScroller.scrollTop = 0
      }
    }
  }
)
</script>

<template>
  <div class="slider" :class="[isOpened && 'slider--opened']">
    <div class="slider__backdrop" @click="emit('close')"></div>
    <CloseButton class="slider__close-btn" @click="emit('close')"
      >close [ x ]</CloseButton
    >
    <div class="container slider__wrapper" @click.stop="emit('close')">
      <ul class="slider__images-list">
        <li
          v-for="(el, idx) in imagesList"
          :key="idx"
          ref="$items"
          class="slider__images-li"
          @click.stop
        >
          <TheImg
            v-if="detectFileType(el.filename) === 'image'"
            class="slider__img"
            :storyblok="true"
            :width="1600"
            :src="el.filename"
            alt="Slider image"
          />
          <ProductVideo
            v-if="detectFileType(el.filename) === 'video'"
            class="slider__img"
            video-class="slider__img"
            :url="el.filename"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
