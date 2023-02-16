import { Ref } from 'nuxt/dist/app/compat/capi'
import { iItem } from '~/types/products'

export const useCategoryFilter = (items: Ref<iItem[]>) => {
  const filteredProductsByCategory = ref<iItem[]>(items.value)
  const router = useRouter()
  const route = useRoute()

  watch(items, () => {
    filteredProductsByCategory.value = items.value
  })

  const categoryFilterHandler = (value: string) => {
    if (value === 'default') {
      filteredProductsByCategory.value = items.value

      router.replace({
        ...router.currentRoute,
        query: {
          filter: undefined,
        },
      })
    } else {
      filteredProductsByCategory.value = items.value.filter(
        product => product.category === value
      )
      router.push(`?filter=${value}`)
    }

    return filteredProductsByCategory.value
  }

  const categories = computed(() => {
    return [...new Set(items.value.map(product => product.category))]
  })

  onMounted(() => {
    if (route.query.filter) {
      categoryFilterHandler(route.query.filter as string)
    }
  })

  return { filteredProductsByCategory, categoryFilterHandler, categories }
}
