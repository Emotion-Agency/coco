<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})
</script>

<template>
  <main>
    <section class="section section--nm home-1">
      <img class="home-1__bg" src="/images/home/1.jpg" alt="Background" />
      <div class="container home-1__wrapper">
        <div class="home-1__second-wrapper">
          <h1 class="home-1__title">
            <span class="home-1__span"> Relive </span>
            <span class="home-1__span"> by </span>
            <span class="home-1__span">
              Coco
              <span class="home-1__item"> ® </span>
            </span>
          </h1>
          <h2 class="home-1__text">Jewelry</h2>
          <div class="home-1__description">
            <p class="home-1__desc-text">
              Massa nullam feugiat vestibulum tincidunt arcu facilisis. Diam
              proin est nunc consectetur egestas. Neque egestas habitasse
              feugiat pellentesque velit. Ultricies.
            </p>
            <p class="home-1__desc-text">
              Magnis dolor at vitae sem pretium id. Tincidunt scelerisque risus
              proin nisl faucibus. Pharetra id sed faucibus nunc id. Nunc id
              aenean tempor est varius enim. Ac vel amet vel.
            </p>
            <p class="home-1__desc-text">
              UNATTAINABLE ACCESS, GIVEN TO A LIMITED FEW THAT HAVE ONLY BEEN
              AVAILABLE TO THOSE GRANDFATHERED INTO THE GLOBAL NETWORK. BEGIN
              YOUR SEARCH WITH ORE AND ACCESS THE UNATTAINABLE. FIND THE
              IMPOSSIBLE.
            </p>
          </div>
          <div class="home-1__icon-wrapper">
            <IconsWhiteDiamond />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
