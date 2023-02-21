<template>
  <component :is="tag" class="ticker">
    <div ref="$ticker" class="ticker__items">
      <div
        v-for="index in repeatNumber"
        :key="index"
        class="ticker__item"
        v-html="html"
      />
    </div>
  </component>
</template>

<script setup lang="ts">
interface iProps {
  text: string
  duration?: number
  multiplier?: number
  direction?: 1 | -1
  divider?: string
  tag?: string
}

const props = withDefaults(defineProps<iProps>(), {
  text: '',
  duration: 80,
  multiplier: 21,
  direction: 1,
  divider: '—',
  tag: 'div',
})

let ticker
const $ticker = ref(null)

const repeatNumber = computed(() => {
  let number = Math.max(
    Math.ceil((props.multiplier / props.text.length) * 4),
    2
  )
  number = number % 2 === 0 ? number : number + 1
  return number
})

const initTicker = async () => {
  const { Ticker } = await import('~/assets/scripts/Ticker')
  ticker = new Ticker({
    $el: $ticker.value,
    duration: props.duration,
    direction: props.direction,
  })

  ticker.init()
}

onMounted(async () => {
  await initTicker()
})

onBeforeUnmount(() => {
  ticker && ticker.destroy()
})

const html = computed(() => {
  return '&nbsp' + props.divider + '&nbsp' + props.text
})
</script>
