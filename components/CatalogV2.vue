<script setup lang="ts">
import { iItem } from '~~/types/products'

interface iProps {
  items: iItem[]
}

defineProps<iProps>()

const { addToCart } = useCart()
</script>

<template>
  <ul class="grid catalog-v2">
    <li v-for="(el, idx) in items" :key="idx" class="catalog-v2__product">
      <NuxtLink :to="`/shop/${el.slug}/`" class="catalog-v2__link" @click.stop>
        <div class="catalog-v2__top">
          <TheImg
            format="webp"
            quality="90"
            class="catalog-v2__img"
            :src="el.mainImage"
            alt="Background"
          />
        </div>
        <h3 class="catalog-v2__title">{{ el.title }}</h3>
        <div class="catalog-v2__bottom">
          <p class="catalog-v2__price">[${{ el.price }}]</p>
        </div>
      </NuxtLink>
      <TextButton class="catalog__v2-btn" @click="addToCart(el)"
        >Add to cart</TextButton
      >
    </li>
  </ul>
</template>
