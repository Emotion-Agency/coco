<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { keysGenerator } from '~~/assets/scripts/utils/ea'
import { iItem } from '~~/types/products'

definePageMeta({
  pageTransition,
})

const products = ref<iItem[]>([
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 1',
    price: 1100,
    imgUrl: '/images/catalogV1/1.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 2',
    price: 1100,
    imgUrl: '/images/catalogV1/2.jpg',
    category: 'Category 2',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 3',
    price: 1100,
    imgUrl: '/images/catalogV1/3.jpg',
    category: 'Category 3',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 4',
    price: 1100,
    imgUrl: '/images/catalogV1/4.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 5',
    price: 1100,
    imgUrl: '/images/catalogV1/5.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 6',
    price: 1100,
    imgUrl: '/images/catalogV1/6.jpg',
    category: 'Category 1',
  },
  {
    id: keysGenerator(8),
    title: 'with multicolor bears and cherries 7',
    price: 1100,
    imgUrl: '/images/catalogV1/7.jpg',
    category: 'Category 3',
  },
])

const images = [
  {
    imgUrl: '/images/product/big-img.jpg',
  },
  {
    imgUrl: '/images/product/1.jpg',
  },
  {
    imgUrl: '/images/product/2.jpg',
  },
  {
    imgUrl: '/images/product/3.jpg',
  },
  {
    imgUrl: '/images/product/4.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
  {
    imgUrl: '/images/product/5.jpg',
  },
]

const descriptions = [
  {
    text: 'Details',
    descriptionId: 'details',
  },
  {
    text: 'How to use',
    descriptionId: 'how-use',
  },
  {
    text: 'Product vibes',
    descriptionId: 'product-vibes',
  },
]

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
              <ul class="product-1__img-list">
                <li
                  v-for="(el, idx) in images.slice(0, 5)"
                  :key="idx"
                  class="product-1__img-li"
                >
                  <img
                    class="product-1__img"
                    :src="el.imgUrl"
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
            <h3 class="product-1__name">with multicolor bears and cherries</h3>
            <p class="product-1__category">Category 1</p>
            <p class="product-1__price">$175.00</p>
          </div>
          <div class="product-1__mobile-images-wrapper"></div>
          <div class="product-1__description-wrapper">
            <ul class="product-1__list">
              <li
                v-for="(el, idx) in descriptions"
                :key="idx"
                class="product-1__li"
              >
                <input
                  :id="el.descriptionId"
                  class="product-1__radio"
                  type="radio"
                  name="product-radios"
                  checked
                />
                <label class="product-1__text" :for="el.descriptionId">
                  {{ el.text }}
                </label>
              </li>
            </ul>
            <p class="product-1__desc-text">
              This product is vegan and made with some components are recycled
              charms. Some charms are unique and maybe one charm on the choker
              won’t match exactly the image. This is a handmade product by a
              little 8 year old girl that loves fashion, music, dance and rock
              and roll. This is a unisex product for all ages.
            </p>
          </div>
          <div class="product-1__right-button">
            <TextButton class="product-1__right-btn">Add to bag</TextButton>
          </div>
        </div>
      </div>
      <Slider
        :images-list="images"
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
