<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})

const { updateNextPage } = useFooterLink()
updateNextPage('about')
useAnimation()

useObserver('.section')

const { products } = useProducts()

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
    <PageMeta
      title="Relive by Coco | Shop"
      description="Relive by Coco catalogue page"
    />
    <section class="section section--nm catalogue-1">
      <div class="container catalogue-1__wrapper">
        <h2 data-a-h class="catalogue-1__title">Catalogue</h2>
        <div data-a-o class="catalogue-1__filter-wrapper">
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
