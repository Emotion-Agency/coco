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

const { categoryFilterHandler, filteredProductsByCategory, categories } =
  useCategoryFilter(products)

const filteredItems = computed(() => {
  return products.value.filter(item => {
    return filteredProductsByCategory.value.some(ci => {
      return ci.id === item.id
    })
  })
})
</script>

<template>
  <main>
    <section class="section section--nm home-1">
      <img class="home-1__bg" src="/images/home/1.jpg" alt="Background" />
      <div class="container home-1__wrapper">
        <div class="home-1__second-wrapper">
          <h1 class="home-1__title">
            <span class="home-1__span"> Relive </span>
            <span class="home-1__span"> by </span>
            <span class="home-1__span">
              Coco
              <span class="home-1__item"> ® </span>
            </span>
          </h1>
          <div class="home-1__text">Jewelry</div>
          <div class="home-1__description">
            <p class="home-1__desc-text">
              Massa nullam feugiat vestibulum tincidunt arcu facilisis. Diam
              proin est nunc consectetur egestas. Neque egestas habitasse
              feugiat pellentesque velit. Ultricies.
            </p>
            <p class="home-1__desc-text">
              Magnis dolor at vitae sem pretium id. Tincidunt scelerisque risus
              proin nisl faucibus. Pharetra id sed faucibus nunc id. Nunc id
              aenean tempor est varius enim. Ac vel amet vel.
            </p>
            <p class="home-1__desc-text">
              UNATTAINABLE ACCESS, GIVEN TO A LIMITED FEW THAT HAVE ONLY BEEN
              AVAILABLE TO THOSE GRANDFATHERED INTO THE GLOBAL NETWORK. BEGIN
              YOUR SEARCH WITH ORE AND ACCESS THE UNATTAINABLE. FIND THE
              IMPOSSIBLE.
            </p>
          </div>
          <div class="home-1__icon-wrapper">
            <IconsWhiteDiamond />
          </div>
        </div>
      </div>
    </section>
    <section class="section section--nm home-2">
      <img class="home-2__bg" src="/images/home/2.jpg" alt="Background" />
      <div class="container home-2__wrapper">
        <div class="grid home-2__second-wrapper">
          <h2 class="home-2__text">Unique</h2>
          <h2 class="home-2__text">Creative</h2>
          <h2 class="home-2__text">Vegan</h2>
          <h2 class="home-2__text">and</h2>
          <h2 class="home-2__text">Recycled</h2>
          <h2 class="home-2__text">Jewelry</h2>
        </div>
      </div>
    </section>
    <section class="section home-3">
      <div class="container home-3__wrapper">
        <h2 class="home-3__title">Catalogue</h2>
        <div class="home-3__filter-wrapper">
          <Filter
            :filters="categories"
            default-text="All"
            @filter="categoryFilterHandler"
          />
          <CatalogV1 class="home-3__catalog" :items="filteredItems" />
        </div>
        <div class="home-3__btn-wrapper">
          <TextButton>go to shop →</TextButton>
        </div>
      </div>
    </section>
  </main>
</template>
