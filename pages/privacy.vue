<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { usePrivacyStory } from '~~/composables/stories/privacyStory'

definePageMeta({
  pageTransition,
})

const { story } = await usePrivacyStory()
</script>

<template>
  <main>
    <section class="privacy">
      <div class="container privacy__wrapper">
        <h1 class="privacy__title">Legal and Privacy Policy</h1>
        <div class="grid privacy__content">
          <RichText class="privacy__text" :text="story.content.body" />
        </div>
      </div>
    </section>
  </main>
</template>
