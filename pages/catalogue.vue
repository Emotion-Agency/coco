<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})
</script>

<template>
  <main>
    <section class="section section--nm catalogue-1">
      <div class="container catalogue-1__wrapper">
        <h2 class="catalogue-1__title">Catalogue</h2>
        <div class="catalogue-1__filter-wrapper">
          <Filter />
          <CatalogV2 class="catalogue-1__catalog" />
        </div>
        <div class="catalogue-1__btn-wrapper">
          <TextButton>go to shop →</TextButton>
        </div>
      </div>
    </section>
  </main>
</template>
