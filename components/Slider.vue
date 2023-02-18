<script setup lang="ts">
import { iImage } from '~~/types/story'

interface iProps {
  isOpened: boolean
  imagesList: iImage[]
}

const props = defineProps<iProps>()

const emit = defineEmits(['close'])

watch(
  () => props.isOpened,
  () => {
    if (props.isOpened) {
      window.ss.isFixed = true
    } else {
      window.ss.isFixed = false
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
    <div class="container slider__wrapper">
      <ul class="slider__images-list">
        <li
          v-for="(el, idx) in imagesList"
          :key="idx"
          class="slider__images-li"
        >
          <TheImg
            format="webp"
            quality="90"
            class="slider__img"
            :src="el.filename"
            alt="Slider image"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
