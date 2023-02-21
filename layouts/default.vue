<script setup lang="ts">
import emitter from 'tiny-emitter/instance.js'

import { useFonts } from '~/composables/fonts'
import { productsDTO } from '~~/composables/stories/helpers/productsDTO'
import { useProductsStories } from '~~/composables/stories/productsStory'

/**
* @todo
checkout
loading and transition animations
bears animation
connect insta photos to footer
products hover animations
* */
useFonts()

const { isInEditor } = useAppState()

const { products } = useProducts()
const { stories } = await useProductsStories()

watch(
  stories,
  () => {
    products.value = productsDTO(stories.value)
  },
  { immediate: true }
)

const parallaxInit = async () => {
  const { Parallax } = await import('@emotionagency/parallax')
  window.parallax = new Parallax({ mobile: false })
}

onMounted(async () => {
  if (navigator.userAgent.toLowerCase().includes('safari/')) {
    if (!navigator.userAgent.toLowerCase().includes('chrome/'))
      document.documentElement.classList.add('is-safari')
  }

  const { hello } = await import('~/assets/scripts/utils/hello')
  const { winSizes } = await import('~/assets/scripts/utils/winSizes')
  const { resize } = await import('@/assets/scripts/utils/ea')

  hello()
  resize.on(winSizes)

  await parallaxInit()

  setTimeout(() => {
    const sbBridge = new window.StoryblokBridge()

    sbBridge.on(['input', 'published', 'change'], event => {
      emitter.emit('storyChange', event.story)
    })

    sbBridge.on(['published', 'change'], () => {
      location.reload()
    })

    sbBridge.pingEditor(() => {
      if (sbBridge.isInEditor()) {
        isInEditor.value = true
      }
    })
  }, 200)
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div id="app">
    <Head>
      <Title>Emotion</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></Meta>
      <Link rel="icon" type="image/x-icon" href="/favicon.ico"></Link>
    </Head>
    <AppGrid />
    <SmoothScroll>
      <TheHeader />
      <Cart />
      <div id="noise"></div>
      <slot />
      <div id="gl"></div>
      <div class="noise"></div>
      <TheFooter />
    </SmoothScroll>
    <AppToast />
  </div>
</template>
