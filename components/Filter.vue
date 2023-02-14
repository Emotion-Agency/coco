<script setup lang="ts">
const categories = [
  {
    text: 'All',
    inputId: 'all',
  },
  {
    text: 'Category 1',
    inputId: 'category1',
  },
  {
    text: 'Category 2',
    inputId: 'category2',
  },
  {
    text: 'Category 3',
    inputId: 'category3',
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
    <div v-else class="mobile-filter">
      <button class="mobile-filter__button">
        Choose category
        <IconsFilterMark />
      </button>
      <ul class="mobile-filter__list">
        <li
          v-for="(el, idx) in categories"
          :key="idx"
          class="mobile-filter__li"
        >
          <input
            :id="el.inputId"
            class="mobile-filter__radio"
            type="radio"
            name="filter-radios"
            checked
          />
          <label class="mobile-filter__text" :for="el.inputId">
            {{ el.text }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
