<script setup lang="ts">
import { iItem } from '~~/types/products'

interface iProps {
  items: iItem[]
}

defineProps<iProps>()
</script>

<template>
  <ul class="grid catalog-v1">
    <li v-for="(el, idx) in items" :key="idx" class="catalog-v1__product">
      <NuxtLink to="/shop/1/" class="catalog-v1__link">
        <nuxt-img
          format="webp"
          quality="90"
          class="catalog-v1__img"
          :src="el.imgUrl"
          alt="Background"
        />
        <h3 class="catalog-v1__title">{{ el.title }}</h3>
        <p class="catalog-v1__price">[${{ el.price }}]</p>
      </NuxtLink>
    </li>
  </ul>
</template>
