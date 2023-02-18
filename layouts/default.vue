<script setup lang="ts">
/**
* @todo
fix body height on mobile
* */

import { useFonts } from '~/composables/fonts'

useFonts()

onMounted(async () => {
  const { hello } = await import('~/assets/scripts/utils/hello')
  const { winSizes } = await import('~/assets/scripts/utils/winSizes')
  const { resize } = await import('@/assets/scripts/utils/ea')

  hello()
  resize.on(winSizes)

  if (navigator.userAgent.toLowerCase().includes('safari/')) {
    if (!navigator.userAgent.toLowerCase().includes('chrome/'))
      document.documentElement.classList.add('is-safari')
  }
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
      <slot />
      <TheFooter />
    </SmoothScroll>
  </div>
</template>
