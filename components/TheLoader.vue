<script lang="ts" setup>
const { isLoaded } = useAppState()

const $el = ref(null)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 2000)
})
</script>

<template>
  <transition name="blur">
    <div v-if="!isLoaded" ref="$el" class="coco-loader">
      <div class="container coco-loader__container">
        <IconsBigLogo class="coco-loader__logo" />
        <p class="coco-loader__text">
          Take a deep breath and relax. Our page is loading, and soon you'll be
          able to discover sustainable, ethical jewelry that's handmade with
          heart
        </p>
      </div>
    </div>
  </transition>
</template>
