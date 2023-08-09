<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { useReturnsStories } from '~~/composables/stories/returnsStory'

definePageMeta({
  pageTransition,
})

const { story } = await useReturnsStories()
</script>

<template>
  <main>
    <section class="returns">
      <div class="container returns__wrapper">
        <h1 class="returns__title">Returns & Exchanges</h1>
        <div class="grid returns__content">
          <RichText class="returns__text" :text="story.content.body" />
        </div>
      </div>
    </section>
  </main>
</template>
