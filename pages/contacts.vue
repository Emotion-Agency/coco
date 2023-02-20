<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})

const { updateNextPage } = useFooterLink()
updateNextPage('home')

onMounted(() => {
  document.querySelector('.navbar') &&
    document.querySelector('.navbar').classList.add('with-bg')
})

onBeforeUnmount(() => {
  document.querySelector('.navbar') &&
    document.querySelector('.navbar').classList.remove('with-bg')
})
</script>

<template>
  <main>
    <section class="section contacts-1"></section>
  </main>
</template>
