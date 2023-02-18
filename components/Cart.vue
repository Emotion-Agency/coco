<script setup lang="ts">
const cartItems = [
  {
    imgUrl: '/images/catalogV1/1.jpg',
  },
  {
    imgUrl: '/images/catalogV1/2.jpg',
  },
  {
    imgUrl: '/images/catalogV1/3.jpg',
  },
  {
    imgUrl: '/images/catalogV1/2.jpg',
  },
  {
    imgUrl: '/images/catalogV1/3.jpg',
  },
]

const { isCartOpen } = useCart()

watch(isCartOpen, () => {
  if (isCartOpen.value) {
    window.ss.isFixed = true
  } else {
    window.ss.isFixed = false
  }
})
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
        <ul class="cart__items-list">
          <li v-for="(el, idx) in cartItems" :key="idx" class="cart__item">
            <div v-if="idx !== 0" class="cart__line"></div>
            <div class="cart__item-wrapper">
              <TheImg
                format="webp"
                quality="90"
                class="cart__img"
                :src="el.imgUrl"
                alt="Cart image"
              />
              <div class="cart__info-wrapper">
                <div class="cart__top-info">
                  <p class="cart__name">with multicolor bears and cherries</p>
                  <p class="cart__price">$175</p>
                </div>
                <div class="cart__bottom-info">
                  <div class="cart__quantity">
                    <p class="cart__quantity-text">Quantity:</p>
                    <div class="cart__quantity-wrapper">
                      <button class="cart__quantity-btn">-</button>
                      <p class="cart__quantity-number">[ 1 ]</p>
                      <button class="cart__quantity-btn">+</button>
                    </div>
                  </div>
                  <button class="cart__remove-btn">remove</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="cart__bottom-block">
          <div class="cart__subtotal-wrapper">
            <p class="cart__subtotal-text">Subtotal:</p>
            <p class="cart__subtotal-price">$525</p>
          </div>
          <div class="cart__line"></div>
          <div class="cart__button-wrapper">
            <TextButton>Checkout</TextButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
