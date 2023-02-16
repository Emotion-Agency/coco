<script setup lang="ts">
const products = [
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/1.jpg',
  },
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/2.jpg',
  },
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/3.jpg',
  },
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/4.jpg',
  },
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/5.jpg',
  },
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/6.jpg',
  },
  {
    title: 'with multicolor bears and cherries',
    price: '1100',
    imgUrl: '/images/catalogV1/7.jpg',
  },
]
</script>

<template>
  <ul class="grid catalog-v2">
    <li v-for="(el, idx) in products" :key="idx" class="catalog-v2__product">
      <NuxtLink to="/shop/1/" class="catalog-v2__link">
        <img class="catalog-v2__img" :src="el.imgUrl" alt="Background" />
        <h3 class="catalog-v2__title">{{ el.title }}</h3>
        <p class="catalog-v2__price">[${{ el.price }}]</p>
      </NuxtLink>
    </li>
  </ul>
</template>
