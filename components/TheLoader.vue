<script lang="ts" setup>
const { isLoaded } = useAppState()
onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 2000)
})
</script>

<template>
  <Transition name="fade">
    <div v-if="!isLoaded" class="coco-loader">
      <div class="container coco-loader__container">
        <IconsBigLogo class="coco-loader__logo" />
        <p class="coco-loader__text">
          Take a deep breath and relax. Our page is loading, and soon you'll be
          able to discover sustainable, ethical jewelry that's handmade with
          heart
        </p>
      </div>
    </div>
  </Transition>
</template>
