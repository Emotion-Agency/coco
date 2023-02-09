<script setup lang="ts">
const categories = [
  {
    text: 'All',
  },
  {
    text: 'Category 1',
  },
  {
    text: 'Category 2',
  },
  {
    text: 'Category 3',
  },
]
</script>

<template>
  <ul class="filter">
    <li v-for="(el, idx) in categories" :key="idx" class="filter__category">
      <button class="filter__btn">{{ el.text }}</button>
    </li>
  </ul>
</template>
