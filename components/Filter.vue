<script setup lang="ts">
interface iProps {
  filters: string[]
  defaultText?: string
}
const filterValue = ref('default')

defineProps<iProps>()
const emit = defineEmits(['filter'])

const onChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  filterValue.value = target.getAttribute('id')

  console.log(target.getAttribute('id'))
  emit('filter', filterValue.value)
}

const { isMobile } = useMobile()
</script>

<template>
  <div class="filter">
    <ul v-if="!isMobile" class="desktop-filter">
      <li class="desktop-filter__li">
        <input
          id="default"
          class="desktop-filter__radio"
          type="radio"
          name="filter-radios"
          checked
          @change="onChange"
        />
        <label class="desktop-filter__text" for="default">
          {{ defaultText }}
        </label>
      </li>
      <li v-for="(el, idx) in filters" :key="idx" class="desktop-filter__li">
        <input
          :id="el"
          class="desktop-filter__radio"
          type="radio"
          name="filter-radios"
          @change="onChange"
        />
        <label class="desktop-filter__text" :for="el">
          {{ el }}
        </label>
      </li>
    </ul>
    <div v-else class="mobile-filter">
      <button class="mobile-filter__button">
        Choose category
        <IconsFilterMark class="mobile-filter__icon" />
      </button>
      <ul class="mobile-filter__list">
        <li class="mobile-filter__li">
          <input
            id="default"
            class="mobile-filter__radio"
            type="radio"
            name="filter-radios"
            checked
            @change="onChange"
          />
          <label class="mobile-filter__text" for="default">
            {{ defaultText }}
          </label>
        </li>
        <li v-for="(el, idx) in filters" :key="idx" class="mobile-filter__li">
          <input
            :id="el"
            class="mobile-filter__radio"
            type="radio"
            name="filter-radios"
          />
          <label class="mobile-filter__text" :for="el">
            {{ el }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>
