<script setup lang="ts">
import { iItem } from '~~/types/products'
import { appAnimation } from '~/assets/scripts/appAnimation'

interface iProps {
  items: iItem[]
}

const props = defineProps<iProps>()
const isLoading = ref(false)

const $items = ref<NodeListOf<HTMLElement>>(null)

const { startTransition, destroyImages, initImages } = useGL()

onMounted(async () => {
  await initImages($items.value)
})

onBeforeUnmount(() => {
  destroyImages($items.value)
})

watch(
  () => props.items,
  () => {
    isLoading.value = true
    destroyImages($items.value)
    setTimeout(() => {
      initImages($items.value)
      appAnimation()
    }, 200)

    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
)

const JSONSchema = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: process.client && location?.href,
    numberOfItems: props.items.length,
    itemListElement: props.items.map(el => ({
      '@type': 'Product',
      image: el.mainImage,
      url: process.client && `${location?.origin}/shop/${el.slug}`,
      name: el.title,
      description: el.description,
      offers: {
        '@type': 'Offer',
        availability: el?.disableForSale
          ? 'https://schema.org/SoldOut'
          : 'https://schema.org/InStock',
        price: el.price,
        priceCurrency: 'USD',
      },
    })),
  }
})

useHead({
  script: [
    {
      children: JSON.stringify(JSONSchema.value),
      type: 'application/ld+json',
    },
  ],
})
</script>

<template>
  <div class="catalog-v1-wrapper">
    <ul class="grid catalog-v1" :class="[isLoading && 'catalog-v1--loading']">
      <li
        v-for="(el, idx) in items"
        ref="$items"
        :key="idx"
        data-a-o
        class="catalog-product catalog-v1__product"
      >
        <a
          :href="`/shop/${el.slug}/`"
          class="catalog-v1__link"
          @click.prevent="startTransition"
        >
          <TheImg
            class="catalog-v1__img"
            :storyblok="true"
            :imgx="true"
            :width="800"
            :src="el.mainImage"
            alt="Background"
            data-gl
            data-gl-parallax="1"
            data-a-gl
            data-a-gl-progress="0"
          />
          <h3 class="catalog-v1__title">{{ el.title }}</h3>
          <Price
            :price="el.price"
            :compare-price="el.compare_price"
            :disable-for-sale="el.disableForSale"
            class="catalog-v1__price"
          />
        </a>
      </li>
    </ul>
    <UiLoader v-if="isLoading" class="catalog-loader" />
  </div>
</template>
