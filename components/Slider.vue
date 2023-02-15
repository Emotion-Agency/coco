<script setup lang="ts">
const imagesList = [
  {
    imgUrl: '/images/product/1.jpg',
  },
  {
    imgUrl: '/images/product/2.jpg',
  },
  {
    imgUrl: '/images/product/3.jpg',
  },
  {
    imgUrl: '/images/product/4.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
]
</script>

<template>
  <div class="slider slider--opened">
    <div class="slider__backdrop"></div>
    <CloseButton class="slider__close-btn">close [ x ]</CloseButton>
    <div class="container slider__wrapper">
      <ul class="slider__images-list">
        <li
          v-for="(el, idx) in imagesList"
          :key="idx"
          class="slider__images-li"
        >
          <img class="slider__img" :src="el.imgUrl" alt="Slider image" />
        </li>
      </ul>
    </div>
  </div>
</template>
