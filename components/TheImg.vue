<script lang="ts" setup>
interface iProps {
  src: string
}

defineProps<iProps>()
</script>

<template>
  <img :src="src" />
</template>
