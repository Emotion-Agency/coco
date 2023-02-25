<script setup lang="ts">
onMounted(async () => {
  const { SmoothScroll } = await import('@emotionagency/smoothscroll')
  const { raf } = await import('~/assets/scripts/utils/ea')

  window.ss = new SmoothScroll({
    el: document.documentElement,
    mobile: false,
    breakpoint: 1060,
    passive: false,
    isFixed: true,
    friction: 0.07,
    stepSize: 0.9,
    scrollbar: true,
    useKeyboard: false,
    raf,
  })
})

onBeforeUnmount(() => {
  window.ss && window.ss.destroy()
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
