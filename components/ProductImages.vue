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
  const top =
    target.getBoundingClientRect().top -
    target.getBoundingClientRect().height / 2

  $sliderScroller.scrollTop = top

  emit('openSlider')
}
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
          format="webp"
          quality="90"
          class="product-1__img"
          :src="el.filename"
          :storyblok="true"
          :width="900"
          alt="Main image"
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
