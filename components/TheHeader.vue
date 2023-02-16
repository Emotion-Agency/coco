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
</script>

<template>
  <header class="header navbar">
    <div class="container header__wrapper">
      <ul class="header__navbar">
        <li class="header__li">
          <NuxtLink to="/" class="header__text"> Home </NuxtLink>
        </li>
        <li class="header__li">
          <NuxtLink to="/shop?filter=New collection" class="header__text">
            New collection
          </NuxtLink>
        </li>
        <li class="header__li">
          <NuxtLink to="/shop/" class="header__text"> Shop </NuxtLink>
        </li>
        <li class="header__li">
          <NuxtLink to="/about/" class="header__text"> About </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/" class="header__logo" aria-label="Logo">
        <IconsLogo />
      </NuxtLink>
      <button
        class="header__cart-btn"
        aria-label="Open cart"
        @click="isCartOpen = true"
      >
        bag [01]
      </button>
    </div>
    <button class="header__burger">
      <span class="header__line"></span>
    </button>
  </header>
</template>
