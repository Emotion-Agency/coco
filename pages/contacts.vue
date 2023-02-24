<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { useContactsStory } from '~~/composables/stories/contactsStory'

definePageMeta({
  pageTransition,
})

const { updateNextPage } = useFooterLink()
updateNextPage('home')
useAnimation()

onMounted(() => {
  document.querySelector('.navbar') &&
    document.querySelector('.navbar').classList.add('with-bg')
})

onBeforeUnmount(() => {
  document.querySelector('.navbar') &&
    document.querySelector('.navbar').classList.remove('with-bg')
})

const { story } = await useContactsStory()
</script>

<template>
  <main>
    <PageMeta
      v-if="story.content?.Meta?.length"
      :title="story.content?.Meta[0].title"
      :description="story.content?.Meta[0].description"
    />
    <section class="section contacts-1"></section>
  </main>
</template>
