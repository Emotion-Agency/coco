<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { keysGenerator } from '~~/assets/scripts/utils/ea'
import { iItem } from '~~/types/products'

definePageMeta({
  pageTransition,
})

const products = ref<iItem[]>([
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 1',
    price: 1100,
    imgUrl: '/images/catalogV1/1.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 2',
    price: 1100,
    imgUrl: '/images/catalogV1/2.jpg',
    category: 'Category 2',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 3',
    price: 1100,
    imgUrl: '/images/catalogV1/3.jpg',
    category: 'Category 3',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 4',
    price: 1100,
    imgUrl: '/images/catalogV1/4.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 5',
    price: 1100,
    imgUrl: '/images/catalogV1/5.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 6',
    price: 1100,
    imgUrl: '/images/catalogV1/6.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 7',
    price: 1100,
    imgUrl: '/images/catalogV1/7.jpg',
    category: 'Category 3',
  },
])

const { categoryFilterHandler, filteredProductsByCategory, categories } =
  useCategoryFilter(products)

const filteredItems = computed(() => {
  return products.value.filter(item => {
    return filteredProductsByCategory.value.some(ci => {
      return ci.id === item.id
    })
  })
})
</script>

<template>
  <main>
    <section class="section section--nm catalogue-1">
      <div class="container catalogue-1__wrapper">
        <h2 class="catalogue-1__title">Catalogue</h2>
        <div class="catalogue-1__filter-wrapper">
          <Filter
            :filters="categories"
            default-text="All"
            @filter="categoryFilterHandler"
          />
          <CatalogV2 class="catalogue-1__catalog" :items="filteredItems" />
        </div>
      </div>
    </section>
  </main>
</template>
