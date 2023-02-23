<script setup lang="ts">
import emitter from 'tiny-emitter/instance.js'

import { useFonts } from '~/composables/fonts'
import { productsDTO } from '~~/composables/stories/helpers/productsDTO'
import { useProductsStories } from '~~/composables/stories/productsStory'

/**
* @todo
loading animation
connect insta photos to footer
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

const { createScene } = useGL()

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
        document.body.classList.add('in-storyblok')
      }
    })
  }, 200)

  await createScene()
})

useHead({
  htmlAttrs: {
    lang: 'en',
    id: 'scroll-container',
  },
})
</script>

<template>
  <div id="app">
    <Head>
      <Title>Emotion</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1 minimum-scale=1 maximum-scale=1"
      ></Meta>
      <Link rel="icon" type="image/x-icon" href="/favicon.ico"></Link>
    </Head>
    <AppGrid />
    <SmoothScroll>
      <TheHeader />
      <Cart />
      <slot />
      <div id="gl"></div>
      <div class="noise"></div>
      <TheFooter />
    </SmoothScroll>
    <AppToast />
  </div>
</template>
