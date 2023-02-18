<script setup lang="ts">
import emitter from 'tiny-emitter/instance.js'

import { iItem } from '~~/types/products'

interface iProps {
  items: iItem[]
}

defineProps<iProps>()

onMounted(async () => {
  const { initImages } = await import('~/assets/scripts/GL/Images/init')
  if (window.scetch) {
    initImages()
  } else {
    emitter.on('scetchCreated', initImages)
  }
})
</script>

<template>
  <ul class="grid catalog-v1">
    <li v-for="(el, idx) in items" :key="idx" class="catalog-v1__product">
      <NuxtLink :to="`/shop/${el.slug}/`" class="catalog-v1__link">
        <TheImg
          data-gl
          format="webp"
          quality="90"
          class="catalog-v1__img"
          :storyblok="true"
          :width="800"
          :src="el.mainImage"
          data-gl-parallax="1"
          data-a-gl
          data-a-gl-progress="1"
          alt="Background"
        />
        <h3 class="catalog-v1__title">{{ el.title }}</h3>
        <p class="catalog-v1__price">[${{ el.price }}]</p>
      </NuxtLink>
    </li>
  </ul>
</template>
