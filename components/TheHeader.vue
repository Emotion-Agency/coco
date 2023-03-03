<script setup lang="ts">
const { isCartOpen } = useCart()

let navbarPos

onMounted(async () => {
  const { default: NavbarPos } = await import(
    '~/assets/scripts/utils/navbarPos'
  )
  navbarPos = new NavbarPos()
  navbarPos.init()
})

onBeforeUnmount(() => {
  navbarPos && navbarPos.destroy()
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
  {
    link: '/contacts',
    text: 'Contacts',
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
    <ClientOnly>
      <Burger :nav-items="navItems" />
    </ClientOnly>
  </header>
</template>
