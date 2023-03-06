<script lang="ts" setup>
import { iItem } from '~~/types/products'

interface iProps {
  product: iItem
}

defineProps<iProps>()
const emit = defineEmits(['openSlider'])

const itemClickHandler = (index: number) => {
  const $slidersImg = document.querySelectorAll('.slider__images-li')
  const $sliderScroller = document.querySelector('.slider__wrapper')
  const target = $slidersImg[index]

  const targetTop = target.getBoundingClientRect().top
  const targetHeight = target.getBoundingClientRect().height
  const windowHeight = window.innerHeight
  const sliderHeight = $sliderScroller.getBoundingClientRect().height
  const offset = (sliderHeight - windowHeight) / 2

  $sliderScroller.scrollTop =
    targetTop - windowHeight / 2 + targetHeight / 2 - offset

  emit('openSlider')
}

const { detectFileType } = useDetectFileType()
</script>

<template>
  <div class="product-1__left-block">
    <ul v-if="product?.images?.length" class="product-1__img-list">
      <li
        v-for="(el, idx) in product.images.slice(0, 5)"
        :key="idx"
        class="product-1__img-li"
        @click="itemClickHandler(idx)"
      >
        <TheImg
          v-if="detectFileType(el.filename) === 'image'"
          class="product-1__img"
          :src="el.filename"
          :storyblok="true"
          :width="900"
          alt="Main image"
        />
        <ProductVideo
          v-if="detectFileType(el.filename) === 'video'"
          class="product-1__img"
          video-class="product-1__img"
          :url="el.filename"
          :disabled="true"
        />
      </li>
    </ul>
    <div class="product-1__btn-wrapper">
      <button class="product-1__btn" @click="emit('openSlider')">
        View All {{ product?.images?.length }} photos
        <IconsArrowDown />
      </button>
    </div>
  </div>
</template>
