<script setup lang="ts">
interface iProps {
  filters: string[]
  defaultText?: string
}
defineProps<iProps>()

const route = useRoute()

const filterValue = ref((route.query.filter as string) || 'default')

const emit = defineEmits(['filter'])

const onChange = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  filterValue.value = target.getAttribute('id')

  emit('filter', filterValue.value)
}

const { isMobile } = useMobile()

const isFilterOpen = ref(false)

const closeHandler = () => {
  isFilterOpen.value = false
}

onMounted(() => {
  document.body.addEventListener('click', closeHandler)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('click', closeHandler)
})
</script>

<template>
  <nav class="filter">
    <ul v-if="!isMobile" class="desktop-filter">
      <li class="desktop-filter__li">
        <input
          id="default"
          class="desktop-filter__radio"
          type="radio"
          name="filter-radios"
          :checked="filterValue === 'default'"
          @change="onChange"
        />
        <label class="desktop-filter__text" for="default">
          {{ defaultText }}
        </label>
      </li>
      <li v-for="(el, idx) in filters" :key="idx" class="desktop-filter__li">
        <input
          :id="el?.toLocaleLowerCase().replace(/\s/gm, '-')"
          class="desktop-filter__radio"
          type="radio"
          name="filter-radios"
          :checked="filterValue === el.toLocaleLowerCase().replace(/\s/gm, '-')"
          @change="onChange"
        />
        <label
          class="desktop-filter__text"
          :for="el?.toLocaleLowerCase().replace(/\s/gm, '-')"
        >
          {{ el }}
        </label>
      </li>
    </ul>
    <div v-else class="mobile-filter">
      <button
        class="mobile-filter__button"
        @click.stop="isFilterOpen = !isFilterOpen"
      >
        {{
          filterValue === 'default'
            ? 'Choose category'
            : filterValue.replace(/\-/gm, ' ')
        }}
        <IconsFilterMark class="mobile-filter__icon" />
      </button>
      <ul
        class="mobile-filter__list"
        :class="[isFilterOpen && 'mobile-filter__list--opened']"
      >
        <li class="mobile-filter__li">
          <input
            id="default"
            class="mobile-filter__radio"
            type="radio"
            name="filter-radios"
            :checked="filterValue === 'default'"
            @change="onChange"
          />
          <label class="mobile-filter__text" for="default">
            {{ defaultText }}
          </label>
        </li>
        <li v-for="(el, idx) in filters" :key="idx" class="mobile-filter__li">
          <input
            :id="el?.toLocaleLowerCase().replace(/\s/gm, '-')"
            class="mobile-filter__radio"
            type="radio"
            name="filter-radios"
            :checked="
              filterValue === el.toLocaleLowerCase().replace(/\s/gm, '-')
            "
            @change="onChange"
          />
          <label
            class="mobile-filter__text"
            :for="el?.toLocaleLowerCase().replace(/\s/gm, '-')"
          >
            {{ el }}
          </label>
        </li>
      </ul>
    </div>
  </nav>
</template>
