<script setup lang="ts">
import Richtext from 'storyblok-js-client'

interface iProps {
  text: Richtext | string | any | object
}

const props = defineProps<iProps>()

const storyapi = useStoryblokApi()
const richtext = computed(() => {
  try {
    return storyapi.richTextResolver.render(props.text)
  } catch (error) {
    return ''
  }
})
</script>

<template>
  <div v-html="richtext"></div>
</template>
