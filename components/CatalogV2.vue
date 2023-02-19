<script setup lang="ts">
import { iItem } from '~~/types/products'

interface iProps {
  items: iItem[]
}

const props = defineProps<iProps>()
const isLoading = ref(false)

const { addToCart } = useCart()

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
  <div class="catalog-v2-wrapper">
    <ul class="grid catalog-v2" :class="[isLoading && 'catalog-v2--loading']">
      <li
        v-for="(el, idx) in items"
        ref="$items"
        :key="idx"
        class="catalog-v2__product"
      >
        <a
          :href="`/shop/${el.slug}/`"
          class="catalog-v2__link"
          @click.prevent="startTransition"
        >
          <div class="catalog-v2__top">
            <TheImg
              format="webp"
              quality="90"
              :storyblok="true"
              :imgx="true"
              :width="800"
              class="catalog-v2__img"
              :src="el.mainImage"
              alt="Background"
              data-gl
              data-gl-parallax="1"
              data-a-gl
              data-a-gl-progress="1"
            />
          </div>
          <h3 class="catalog-v2__title">{{ el.title }}</h3>
          <div class="catalog-v2__bottom">
            <p class="catalog-v2__price">[${{ el.price }}]</p>
          </div>
        </a>
        <TextButton class="catalog__v2-btn" @click="addToCart(el)"
          >Add to bag</TextButton
        >
      </li>
    </ul>
    <UiLoader v-if="isLoading" class="catalog-loader" />
  </div>
</template>
