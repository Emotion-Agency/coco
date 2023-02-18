<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})

const { products } = useProducts()

const route = useRoute()

const slug = route.params.slug

const currentProduct = computed(() => {
  return products.value.find(product => product.slug === slug)
})

if (!currentProduct.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const tabs = ref([
  {
    title: 'Details',
    descriptionId: 'details',
    text: currentProduct.value.description,
    isActive: true,
  },
  {
    title: 'How to use',
    descriptionId: 'how-use',
    text: currentProduct.value.how_to_use,
    isActive: false,
  },
  {
    title: 'Product vibes',
    descriptionId: 'product-vibes',
    text: currentProduct.value.product_vibes,
    isActive: false,
  },
])

const tabHandler = (id: string) => {
  tabs.value = tabs.value.map(tab => {
    if (tab.descriptionId === id) {
      return { ...tab, isActive: true }
    }
    return { ...tab, isActive: false }
  })
}

const isSliderOpen = ref(false)

const { isMobile } = useMobile()
</script>

<template>
  <main>
    <section class="section product-1">
      <div class="container grid product-1__wrapper">
        <ClientOnly>
          <Teleport
            :disabled="!isMobile"
            to=".product-1__mobile-images-wrapper"
          >
            <div class="product-1__left-block">
              <ul
                v-if="currentProduct?.images?.length"
                class="product-1__img-list"
              >
                <li
                  v-for="(el, idx) in currentProduct.images.slice(0, 5)"
                  :key="idx"
                  class="product-1__img-li"
                >
                  <TheImg
                    format="webp"
                    quality="90"
                    class="product-1__img"
                    :src="el.filename"
                    alt="Main image"
                  />
                </li>
              </ul>
              <div class="product-1__btn-wrapper">
                <button class="product-1__btn" @click="isSliderOpen = true">
                  View All 20 photos
                  <IconsArrowDown />
                </button>
              </div>
            </div>
          </Teleport>
        </ClientOnly>
        <div class="product-1__right-block">
          <div class="product-1__info-wrapper">
            <p class="product-1__specific">(Choker №1)</p>
            <h3 class="product-1__name">{{ currentProduct.title }}</h3>
            <p class="product-1__category">{{ currentProduct.collection }}</p>
            <p class="product-1__price">${{ currentProduct.price }}</p>
          </div>
          <div class="product-1__mobile-images-wrapper"></div>
          <div class="product-1__description-wrapper">
            <ul class="product-1__list">
              <li v-for="(el, idx) in tabs" :key="idx" class="product-1__li">
                <input
                  :id="el.descriptionId"
                  class="product-1__radio"
                  type="radio"
                  name="product-radios"
                  :checked="el.isActive"
                  @change="tabHandler(el.descriptionId)"
                />
                <label class="product-1__text" :for="el.descriptionId">
                  {{ el.title }}
                </label>
              </li>
            </ul>
            <div class="product-1__desc-text-wrapper">
              <p
                v-for="tab in tabs"
                v-show="tab.isActive"
                :key="tab.descriptionId"
                class="product-1__desc-text"
              >
                {{ tab.text }}
              </p>
            </div>
          </div>
          <div class="product-1__right-button">
            <TextButton class="product-1__right-btn">Add to bag</TextButton>
          </div>
        </div>
      </div>
      <Slider
        v-if="currentProduct?.images?.length"
        :images-list="currentProduct.images"
        :is-opened="isSliderOpen"
        @close="isSliderOpen = false"
      />
    </section>
    <section class="section product-2">
      <div class="container product-2__wrapper">
        <h2 class="product-2__title">Other Products</h2>
        <div class="product-2__filter-wrapper">
          <CatalogV2 class="product-2__catalog" :items="products" />
        </div>
        <div class="product-2__btn-wrapper">
          <TextButton>See all</TextButton>
        </div>
      </div>
    </section>
  </main>
</template>
