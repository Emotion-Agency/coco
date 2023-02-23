<script lang="ts" setup>
import { delayPromise, raf } from '~~/assets/scripts/utils/ea'
import { fallingBears, fallingBearsReturn } from '~/assets/scripts/FallingBears'

const $parent = ref(null)

const isInited = ref(false)
const isFocused = ref(true)

let setup = (fl: fallingBearsReturn) => {
  const top = $parent.value.getBoundingClientRect().top
  const height = $parent.value.getBoundingClientRect().height

  if (top < window.innerHeight && -top < height && isFocused.value) {
    !isInited.value && fl.play()
    isInited.value = true
  } else {
    isInited.value && fl.stop()
    isInited.value = false
  }
}

onMounted(async () => {
  await delayPromise(2000)
  const fl = fallingBears($parent.value)
  setup = setup.bind(null, fl)
  window.addEventListener('blur', () => {
    isFocused.value = false
  })
  window.addEventListener('focus', () => {
    isFocused.value = true
  })
  raf.on(setup)
})

onBeforeUnmount(() => {
  raf.off(setup)
})
</script>

<template>
  <ClientOnly>
    <div id="bears" ref="$parent"></div>
  </ClientOnly>
</template>
