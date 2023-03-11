<script lang="ts" setup>
import { raf } from '~~/assets/scripts/utils/ea'
import { iItem } from '~~/types/products'

interface iProps {
  currentProduct: iItem
}

defineProps<iProps>()

const { isMobile } = useMobile()
const { addToCart } = useCart()

const isButtonVisible = ref(false)

const detectBottom = () => {
  const top = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - window.innerHeight

  isButtonVisible.value = !(top > height - 200)
}

onMounted(() => {
  raf.on(detectBottom)
})

onBeforeUnmount(() => {
  raf.off(detectBottom)
})
</script>

<template>
  <Teleport :disabled="!isMobile" to="#app">
    <div data-a-o class="product-1__right-button">
      <TextButton
        v-if="!currentProduct.disableForSale"
        class="product-1__right-btn"
        :class="[!isButtonVisible && 'product-1__right-btn--hidden']"
        :disabled="currentProduct.disableForSale"
        @click="addToCart(currentProduct)"
      >
        Add to bag
      </TextButton>
    </div>
  </Teleport>
</template>
