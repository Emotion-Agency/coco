import { Ref } from 'nuxt/dist/app/compat/capi'
import { iItem } from '~/types/products'

export const useCategoryFilter = (items: Ref<iItem[]>) => {
  const filteredProductsByCategory = ref<iItem[]>(items.value)

  watch(items, () => {
    filteredProductsByCategory.value = items.value
  })

  const categoryFilterHandler = (value: string) => {
    if (value === 'default') {
      filteredProductsByCategory.value = items.value
    } else {
      filteredProductsByCategory.value = items.value.filter(
        product => product.category === value
      )
    }
    return filteredProductsByCategory.value
  }

  const categories = computed(() => {
    return [...new Set(items.value.map(product => product.category))]
  })

  return { filteredProductsByCategory, categoryFilterHandler, categories }
}
