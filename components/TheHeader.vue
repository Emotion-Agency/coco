<script setup lang="ts">
import gsap from 'gsap'
import { clamp } from '~/assets/scripts/utils/ea'
const { isCartOpen } = useCart()
const isBurgerOpen = ref(false)

const $burgerItems = ref<HTMLElement>(null)
const $burgerBg = ref<HTMLElement>(null)

const itemsPositionHandler = () => {
  const { width, height } = $burgerItems.value.getBoundingClientRect()

  const minWidth = clamp(width, 200, window.innerWidth - 40)
  const minHeight = clamp(height, 150, window.innerHeight - 40)

  $burgerBg.value.style.setProperty('--width', minWidth + 'px')
  $burgerBg.value.style.setProperty('--height', minHeight + height / 3 + 'px')

  const tl = gsap.timeline()
  if (isBurgerOpen.value) {
    tl.to($burgerItems.value, {
      duration: 0.45,
      opacity: 1,
      pointerEvents: 'auto',
      overwrite: true,
      delay: 0.45,
    })
  } else {
    tl.to($burgerItems.value, {
      duration: 0.01,
      opacity: 0,
      pointerEvents: 'none',
      overwrite: true,
      delay: 0,
    })
  }
}

const closeBurger = () => {
  isBurgerOpen.value = false
  itemsPositionHandler()
}

const burgerHandler = () => {
  isBurgerOpen.value = !isBurgerOpen.value

  itemsPositionHandler()
}

let navbarPos

onMounted(async () => {
  const { default: NavbarPos } = await import(
    '~/assets/scripts/utils/navbarPos'
  )
  navbarPos = new NavbarPos()
  navbarPos.init()

  document.body.addEventListener('click', closeBurger)
})

onBeforeUnmount(() => {
  navbarPos && navbarPos.destroy()

  document.body.removeEventListener('click', closeBurger)
})

const navItems = [
  {
    link: '/',
    text: 'Home',
  },
  // {
  //   link: '/shop?filter=New collection',
  //   text: 'New collection',
  // },
  {
    link: '/shop',
    text: 'Shop',
  },
  {
    link: '/about',
    text: 'About',
  },
]

const { cartItems } = useCart()

const cartItemsLength = computed(() => {
  const totalItemsArray = cartItems.value.map(item => item.quantity)

  return totalItemsArray.reduce((a, b) => a + b, 0)
})
</script>

<template>
  <header class="header navbar">
    <div class="container header__wrapper">
      <nav class="header__navbar">
        <ul class="header__nav-items">
          <li v-for="item in navItems" :key="item.text" class="header__li">
            <NuxtLink :to="item.link" class="header__text">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtLink to="/" class="header__logo" aria-label="Logo">
        <IconsLogo />
      </NuxtLink>
      <button
        class="header__cart-btn"
        aria-label="Open cart"
        @click="isCartOpen = true"
      >
        bag [{{ cartItemsLength }}]
      </button>
    </div>
    <Teleport to="#app">
      <div class="burger-wrapper">
        <button
          aria-label="open menu"
          class="burger"
          :class="[isBurgerOpen && 'burger--opened']"
          @click.stop="burgerHandler"
        >
          <span ref="$burgerBg" class="burger__bg">
            <nav ref="$burgerItems" class="burger-menu">
              <ul class="burger-menu__items">
                <li
                  v-for="item in navItems"
                  :key="item.text"
                  class="burger-menu__li"
                >
                  <NuxtLink :to="item.link" class="burger-menu__text">
                    {{ item.text }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </span>
          <span class="burger__lines">
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
          </span>
        </button>
      </div>
    </Teleport>
  </header>
</template>
