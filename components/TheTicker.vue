<template>
  <div class="ticker">
    <div ref="$ticker" class="ticker__items">
      <div
        v-for="index in repeatNumber"
        :key="index"
        class="ticker__item"
        v-html="'&nbsp' + divider + '&nbsp' + text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface iProps {
  text: string
  duration?: number
  multiplier?: number
  direction?: 1 | -1
  divider?: string
}

const props = defineProps<iProps>()

const text = props.text || ''
const duration = props.duration || 80
const multiplier = props.multiplier || 21
const direction = props.direction || 1
const divider = props.divider || '—'

let ticker
const $ticker = ref(null)

const repeatNumber = computed(() => {
  let number = Math.max(Math.ceil((multiplier / text.length) * 4), 2)
  number = number % 2 === 0 ? number : number + 1
  return number
})

const initTicker = async () => {
  const { Ticker } = await import('~/assets/scripts/Ticker')
  ticker = new Ticker({
    $el: $ticker.value,
    duration,
    direction,
  })

  ticker.init()
}

onMounted(async () => {
  await initTicker()
})

onBeforeUnmount(() => {
  ticker && ticker.destroy()
})
</script>
