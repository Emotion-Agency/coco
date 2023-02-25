<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { useProductsStories } from '~~/composables/stories/productsStory'

definePageMeta({
  pageTransition,
})
useObserver('.section')

const { updateNextPage } = useFooterLink()
updateNextPage('home')
useAnimation()

const { products } = useProducts()
const { listenStory } = await useProductsStories()

const route = useRoute()

const slug = route.params.slug

listenStory(slug)

const currentProduct = computed(() => {
  return products.value.find(product => product.slug === slug)
})

if (!currentProduct.value) {
  throw showError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const otherProducts = computed(() => {
  return products.value.filter(product => product.slug !== slug).slice(0, 6)
})

const activeTab = ref('product-vibes')

const tabs = computed(() => [
  {
    title: 'Product vibes',
    descriptionId: 'product-vibes',
    text: currentProduct.value.description,
  },
  {
    title: 'Coco says',
    descriptionId: 'coco-says',
    text: currentProduct.value.how_to_use,
  },
  {
    title: 'Details',
    descriptionId: 'details',
    text: currentProduct.value.details,
  },
])

const tabHandler = (id: string) => {
  activeTab.value = id
}

const isSliderOpen = ref(false)

const { isMobile } = useMobile()

const { addToCart } = useCart()

const { destroyImages } = useGL()

const $el = ref<HTMLElement>(null)

onBeforeUnmount(() => {
  destroyImages([$el.value])
})

const JSONSchema = computed(() => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
    description: currentProduct.value.description,
    name: currentProduct.value.title,
    image: currentProduct.value.mainImage,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: currentProduct.value.price,
      priceCurrency: 'USD',
    },
  }
})

const metaImg = computed(() => {
  return useStoryblokImage(currentProduct.value.mainImage, {
    size: `${1200}x${0}`,
  })
})
</script>

<template>
  <main>
    <PageMeta
      :title="`Relive by Coco | ${currentProduct.title}`"
      :description="currentProduct.description"
      :og-image="metaImg"
      :twitter-image="metaImg"
      :schema="JSON.stringify(JSONSchema)"
    />
    <section ref="$el" class="section product-1">
      <div class="container grid product-1__wrapper">
        <ProductImages
          v-if="!isMobile"
          data-a-o
          :product="currentProduct"
          @open-slider="isSliderOpen = true"
        />
        <div class="product-1__right-block">
          <div class="product-1__info-wrapper">
            <p data-a-t class="product-1__specific">
              (Choker №{{ currentProduct.idx + 1 }})
            </p>
            <h3 data-a-h class="product-1__name">{{ currentProduct.title }}</h3>
            <NuxtLink
              v-if="currentProduct.collection"
              :to="`/shop?filter=${currentProduct.collection
                .toLocaleLowerCase()
                .replace(/\s/gm, '-')}`"
              data-a-t
              class="product-1__category"
            >
              {{ currentProduct.collection }}
            </NuxtLink>
            <Price
              :price="currentProduct.price"
              :compare-price="currentProduct.compare_price"
              :disable-for-sale="currentProduct.disableForSale"
              :to-fixed="true"
              data-a-t
              class="product-1__price"
            />
          </div>
          <div class="product-1__mobile-images-wrapper">
            <ProductImages
              v-if="isMobile"
              data-a-o
              :product="currentProduct"
              @open-slider="isSliderOpen = true"
            />
          </div>
          <div data-a-t class="product-1__description-wrapper">
            <ul class="product-1__list">
              <li v-for="(el, idx) in tabs" :key="idx" class="product-1__li">
                <input
                  :id="el.descriptionId"
                  class="product-1__radio"
                  type="radio"
                  name="product-radios"
                  :checked="el.descriptionId === activeTab"
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
                v-show="tab.descriptionId === activeTab"
                :key="tab.descriptionId"
                class="product-1__desc-text"
              >
                {{ tab.text }}
              </p>
            </div>
          </div>
          <ClientOnly>
            <Teleport :disabled="!isMobile" to="#app">
              <div data-a-o class="product-1__right-button">
                <TextButton
                  class="product-1__right-btn"
                  :disabled="currentProduct.disableForSale"
                  @click="addToCart(currentProduct)"
                  >Add to bag</TextButton
                >
              </div>
            </Teleport>
          </ClientOnly>
        </div>
      </div>
      <ClientOnly>
        <Teleport to="#app">
          <LazySlider
            v-if="currentProduct?.images?.length"
            :images-list="currentProduct.images"
            :is-opened="isSliderOpen"
            @close="isSliderOpen = false"
          />
        </Teleport>
      </ClientOnly>
    </section>
    <section v-if="otherProducts?.length" class="section product-2">
      <div class="container product-2__wrapper">
        <h2 class="product-2__title">Other Products</h2>
        <div class="product-2__filter-wrapper">
          <CatalogV2 class="product-2__catalog" :items="otherProducts" />
        </div>
        <div class="product-2__btn-wrapper">
          <TextButton tag="nuxt-link" to="/shop/">See all</TextButton>
        </div>
      </div>
    </section>
  </main>
</template>
