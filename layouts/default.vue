<script setup lang="ts">
import emitter from 'tiny-emitter/instance.js'

import { useFonts } from '~/composables/fonts'
import { productsDTO } from '~~/composables/stories/helpers/productsDTO'
import { useProductsStories } from '~~/composables/stories/productsStory'

await preloadComponents('TheLoader')

useFonts()

interface iProps {
  isFooter?: boolean
}

withDefaults(defineProps<iProps>(), {
  isFooter: true,
})

const { isInEditor, isLoaded } = useAppState()

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

const { createScene, isSceneCreated } = useGL()

useTitleChanger()

onMounted(async () => {
  if (navigator.userAgent.toLowerCase().includes('safari/')) {
    if (!navigator.userAgent.toLowerCase().includes('chrome/'))
      document.documentElement.classList.add('is-safari')
  }

  const { hello } = await import('~/assets/scripts/utils/hello')
  const { winSizes } = await import('~/assets/scripts/utils/winSizes')
  const { resize } = await import('~/assets/scripts/utils/ea')

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
        isLoaded.value = true
        document.body.classList.add('in-storyblok')
      }
    })
  }, 200)

  await createScene()
})

const GOOGLE_TM_ID = 'GTM-5VKX33M'

useHead({
  htmlAttrs: {
    lang: 'en',
    id: 'scroll-container',
  },
  script: [
    {
      hid: 'gtm',
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GOOGLE_TM_ID}');`,
      type: 'text/javascript',
    },
  ],
})

onBeforeUnmount(() => {
  isSceneCreated.value = false
  window.scetch && window.scetch.destroy()
  window.parallax && window.parallax.destroy()
})
</script>

<template>
  <div id="app">
    <Head>
      <Title>Relive by Coco</Title>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1 minimum-scale=1 maximum-scale=1"
      />

      <Meta name="twitter:card" content="summary_large_image" />

      <Meta name="twitter:image" content="/twitter.jpg" />

      <Meta property="og:site_name" content="Relive by Coco" />
      <Meta property="og:image" content="/twitter.png" />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico"></Link>
      <Link
        rel="preconnect"
        href="https://coco-back-production.up.railway.app"
      />
    </Head>
    <TheLoader v-if="!isInEditor" />
    <AppGrid />
    <SmoothScroll>
      <TheHeader />
      <Cart />
      <slot />

      <TheFooter v-if="isFooter" />

      <div id="gl"></div>
      <div class="noise"></div>
    </SmoothScroll>
    <AppToast />
  </div>
</template>
