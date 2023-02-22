<script lang="ts" setup>
interface iProps {
  price: string
  comparePrice: string | null
  disableForSale: boolean
  toFixed?: boolean
}

const props = defineProps<iProps>()

const finalPrice = computed(() => {
  if (props.toFixed && !props.comparePrice) {
    return Number(props.price).toFixed(2)
  }
  return props.price
})
</script>

<template>
  <div class="price-wrapper">
    <p
      v-if="!disableForSale"
      class="price"
      :class="[comparePrice && 'price--sale']"
    >
      [
      <span class="price__current">${{ finalPrice }}</span>
      <span v-if="comparePrice" class="price__compare"
        >${{ comparePrice }}
      </span>
      ]
    </p>
    <p v-else>[Sold Out]</p>
  </div>
</template>
