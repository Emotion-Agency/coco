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

const isMobile = ref(true)

const resizeHandler = () => {
  isMobile.value = window?.innerWidth <= 1060
}

onMounted(async () => {
  const { resize } = await import('@emotionagency/utils')

  resize.on(resizeHandler)
})
</script>

<template>
  <div class="filter">
    <ul v-if="!isMobile" class="desktop-filter">
      <li
        v-for="(el, idx) in categories"
        :key="idx"
        class="desktop-filter__category"
      >
        <button class="desktop-filter__btn">{{ el.text }}</button>
      </li>
    </ul>
    <div v-else class="mobile-filter"></div>
  </div>
</template>
