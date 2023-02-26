<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { useHomeStory } from '~~/composables/stories/homeStory'

definePageMeta({
  pageTransition,
})

const { updateNextPage } = useFooterLink()
updateNextPage('about')

useAnimation()

useObserver('.section')

const { products } = useProducts()

const { categoryFilterHandler, filteredProductsByCategory, categories } =
  useCategoryFilter(products)

const filteredItems = computed(() => {
  return products.value
    .filter(item => {
      return filteredProductsByCategory.value.some(ci => {
        return ci.id === item.id
      })
    })
    .slice(0, 7)
})

// const $section1 = ref<HTMLElement>(null)
// const $section2 = ref<HTMLElement>(null)

// onMounted(async () => {
//   const { default: SectionParallax } = await import(
//     '~/assets/scripts/SectionParallax'
//   )

//   new SectionParallax($section1.value, $section2.value)
// })

const { story } = await useHomeStory()
</script>

<template>
  <KeepAlive>
    <main>
      <PageMeta
        v-if="story?.content?.Meta?.length"
        :title="story?.content?.Meta[0].title"
        :description="story?.content?.Meta[0].description"
      />
      <section class="section section--nm home-1">
        <!-- <video
          data-a-o
          playsinline
          loop
          autoplay
          muted
          src="/1.mp4"
          class="home-1__bg"
        /> -->
        <HomeVideo class="home-1__bg" />
        <div class="container home-1__wrapper">
          <div class="home-1__second-wrapper">
            <h1 class="home-1__title">
              <span data-a-h class="home-1__span"> Relive </span>
              <span data-a-h class="home-1__span"> by </span>
              <span class="home-1__span">
                <span data-a-h>Coco</span>
                <span data-a-t class="home-1__item"> ® </span>
              </span>
            </h1>
            <div data-a-t class="home-1__text">Jewelry</div>
            <div class="home-1__description">
              <p
                v-if="story?.content?.main_screen_text_1"
                data-a-t
                class="home-1__desc-text"
                :title="story?.content?.main_screen_text_1"
              >
                {{ story.content.main_screen_text_1 }}
              </p>
              <p
                v-if="story?.content?.main_screen_text_2"
                data-a-t
                class="home-1__desc-text"
                :title="story?.content?.main_screen_text_2"
              >
                {{ story.content.main_screen_text_2 }}
              </p>
              <p
                v-if="story?.content?.main_screen_text_3"
                :title="story?.content?.main_screen_text_3"
                data-a-t
                class="home-1__desc-text"
              >
                {{ story.content.main_screen_text_3 }}
              </p>
            </div>
            <div data-a-o class="home-1__icon-wrapper">
              <IconsWhiteDiamond />
            </div>
          </div>
        </div>
      </section>
      <section class="section section--nm home-2">
        <ParallaxImg
          class="home-2__bg"
          :src="story.content.second_screen_image.filename"
          :storyblok="true"
          :width="1920"
          alt="Background"
        />
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
            <TextButton tag="nuxt-link" to="/shop/">go to shop</TextButton>
          </div>
        </div>
      </section>
    </main>
  </KeepAlive>
</template>
