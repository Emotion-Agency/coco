<script setup lang="ts">
import { keysGenerator } from '~/assets/scripts/utils/ea'

const {
  isCartOpen,
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  getCartItems,
} = useCart()

watch(isCartOpen, () => {
  if (isCartOpen.value) {
    window.ss.isFixed = true
  } else {
    window.ss.isFixed = false
  }
})

onMounted(() => {
  getCartItems()
})

const totalPrice = computed(() => {
  const itemsPrice = cartItems.value.map(item => +item.price * +item.quantity)

  return itemsPrice.reduce((a, b) => a + b, 0)
})

const sortedItems = computed(() => {
  return [...cartItems.value].sort((a, b) => (a.title < b.title ? -1 : 1))
})

const router = useRouter()

const browseHandler = () => {
  isCartOpen.value = false

  router.push('/shop/')
}

const isLoading = ref(false)

const { createCheckout } = useShopify()
const { addToast } = useToasts()

const onCheckout = async () => {
  try {
    isLoading.value = true
    await createCheckout(cartItems.value)
  } catch (error) {
    console.log(error)

    addToast({
      id: keysGenerator(8),
      color: ToastColor.danger,
      text: error?.message || 'The error was occurred :( Please, try again',
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="cart" :class="[isCartOpen && 'cart--opened']">
    <div class="cart__backdrop" @click="isCartOpen = false"></div>
    <div class="cart__wrapper">
      <CloseButton class="cart__close-btn" @click="isCartOpen = false"
        >close [ x ]</CloseButton
      >
      <h3 class="cart__title">Your bag</h3>
      <div class="cart__line"></div>
      <div class="cart__block-wrapper">
        <div v-if="isLoading" class="cart-loader">
          <UiLoader />
        </div>
        <ul v-if="cartItems?.length" class="cart__items-list">
          <li v-for="(el, idx) in sortedItems" :key="idx" class="cart__item">
            <div v-if="idx !== 0" class="cart__line"></div>
            <div class="cart__item-wrapper">
              <TheImg class="cart__img" :src="el.mainImage" alt="Cart image" />
              <div class="cart__info-wrapper">
                <div class="cart__top-info">
                  <NuxtLink
                    :to="`/shop/${el.slug}/`"
                    class="cart__name"
                    @click="isCartOpen = false"
                    >{{ el.title }}</NuxtLink
                  >
                  <p class="cart__price">${{ +el.price * el.quantity }}</p>
                </div>
                <div class="cart__bottom-info">
                  <div class="cart__quantity">
                    <p class="cart__quantity-text">Quantity:</p>
                    <div class="cart__quantity-wrapper">
                      <button
                        class="cart__quantity-btn"
                        @click="decreaseQuantity(el)"
                      >
                        -
                      </button>
                      <p class="cart__quantity-number">[ {{ el.quantity }} ]</p>
                      <button
                        class="cart__quantity-btn"
                        @click="increaseQuantity(el)"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button class="cart__remove-btn" @click="removeItem(el)">
                    remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div v-else class="cart__empty-message">
          <p>
            Hey there! We noticed your cart is empty - don't miss out on our
            unique and beautiful handmade jewelry
          </p>
          <TextButton class="cart__empty-btn" @click="browseHandler"
            >Browse our collection</TextButton
          >
        </div>
        <div v-if="cartItems?.length" class="cart__bottom-block">
          <div class="cart__subtotal-wrapper">
            <p class="cart__subtotal-text">Subtotal:</p>
            <p class="cart__subtotal-price">${{ totalPrice }}</p>
          </div>
          <div class="cart__line"></div>
          <div class="cart__button-wrapper" @click="onCheckout">
            <TextButton>Checkout</TextButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
