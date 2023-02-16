<script setup lang="ts">
import { useFonts } from '~/composables/fonts'

useFonts()

onMounted(async () => {
  const { hello } = await import('~/assets/scripts/utils/hello')
  hello()

  if (navigator.userAgent.toLowerCase().includes('safari/')) {
    if (!navigator.userAgent.toLowerCase().includes('chrome/'))
      document.documentElement.classList.add('is-safari')
  }
})
</script>

<template>
  <div id="app">
    <Head>
      <Title>Emotion</Title>
      <Meta name="viewport" conten="width=device-width, initial-scale=1"></Meta>
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
