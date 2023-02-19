<script setup lang="ts">
import { iItem } from '~~/types/products'

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
    }, 200)

    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
)
</script>

<template>
  <ul class="grid catalog-v1" :class="[isLoading && 'catalog-v1--loading']">
    <li
      v-for="(el, idx) in items"
      ref="$items"
      :key="idx"
      class="catalog-v1__product"
    >
      <a
        :href="`/shop/${el.slug}/`"
        class="catalog-v1__link"
        @click.prevent="startTransition"
      >
        <TheImg
          format="webp"
          quality="90"
          class="catalog-v1__img"
          :storyblok="true"
          :imgx="true"
          :width="800"
          :src="el.mainImage"
          alt="Background"
          data-gl
          data-gl-parallax="1"
          data-a-gl
          data-a-gl-progress="1"
        />
        <h3 class="catalog-v1__title">{{ el.title }}</h3>
        <p class="catalog-v1__price">[${{ el.price }}]</p>
      </a>
    </li>
  </ul>
</template>
