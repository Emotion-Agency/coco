<script setup lang="ts">
import { iItem } from '~~/types/products'

interface iProps {
  items: iItem[]
}

defineProps<iProps>()
</script>

<template>
  <ul class="grid catalog-v2">
    <li v-for="(el, idx) in items" :key="idx" class="catalog-v2__product">
      <NuxtLink to="/shop/1/" class="catalog-v2__link">
        <img class="catalog-v2__img" :src="el.imgUrl" alt="Background" />
        <h3 class="catalog-v2__title">{{ el.title }}</h3>
        <p class="catalog-v2__price">[${{ el.price }}]</p>
      </NuxtLink>
    </li>
  </ul>
</template>
