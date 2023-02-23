<script lang="ts" setup>
import { delayPromise, raf } from '~~/assets/scripts/utils/ea'

const $parent = ref(null)

onMounted(async () => {
  await delayPromise(2000)
  let isInited = false
  const { fallingBears } = await import('~/assets/scripts/FallingBears')
  const fl = fallingBears($parent.value)
  const setup = () => {
    const top = $parent.value.getBoundingClientRect().top
    if (top < window.innerHeight / 2) {
      !isInited && fl.play()
      isInited = true
    } else {
      isInited && fl.stop()
      isInited = false
    }
  }
  raf.on(setup)
})
</script>

<template>
  <div id="bears" ref="$parent"></div>
</template>
