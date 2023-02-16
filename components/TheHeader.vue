<script setup lang="ts">
const { isCartOpen } = useCart()
</script>

<template>
  <header class="header">
    <div class="container header__wrapper">
      <ul class="header__navbar">
        <li class="header__li">
          <NuxtLink to="/" class="header__text"> Home </NuxtLink>
        </li>
        <li class="header__li">
          <NuxtLink to="/shop?collection=new/" class="header__text">
            New collection
          </NuxtLink>
        </li>
        <li class="header__li">
          <NuxtLink to="/shop/" class="header__text"> Shop </NuxtLink>
        </li>
        <li class="header__li">
          <NuxtLink to="/abou/t" class="header__text"> About </NuxtLink>
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
