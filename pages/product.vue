<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})

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
              <img
                class="product-1__big-img"
                src="/images/product/big-img.jpg"
                alt="Main image"
              />
              <div class="grid product-1__medium-images">
                <img
                  class="product-1__medium-img"
                  src="/images/product/1.jpg"
                  alt="Image"
                />
                <img
                  class="product-1__medium-img"
                  src="/images/product/2.jpg"
                  alt="Image"
                />
                <img
                  class="product-1__medium-img"
                  src="/images/product/3.jpg"
                  alt="Image"
                />
                <img
                  class="product-1__medium-img"
                  src="/images/product/4.jpg"
                  alt="Image"
                />
              </div>
              <!-- <div class="grid product-1__small-images">
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
            <img
              class="product-1__small-img"
              src="/images/product/1.jpg"
              alt="Image"
            />
          </div> -->
              <div class="product-1__btn-wrapper">
                <TextButton class="product-1__btn">
                  View All 20 photos
                  <IconsArrowDown />
                </TextButton>
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

          <TextButton class="product-1__right-btn">Add to bag →</TextButton>
        </div>
      </div>
    </section>
    <section class="section product-2">
      <div class="container product-2__wrapper">
        <h2 class="product-2__title">Other Products</h2>
        <div class="product-2__filter-wrapper">
          <CatalogV2 class="product-2__catalog" />
        </div>
        <div class="product-2__btn-wrapper">
          <TextButton>See all →</TextButton>
        </div>
      </div>
    </section>
  </main>
</template>
