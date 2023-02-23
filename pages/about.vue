<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'
import { useAboutStory } from '~/composables/stories/aboutStory'

definePageMeta({
  pageTransition,
})

const { updateNextPage } = useFooterLink()
updateNextPage('shop')
useAnimation()

useObserver('.section')

const { story } = await useAboutStory()
</script>

<template>
  <main>
    <section class="section section--nm about-1">
      <ParallaxImg
        data-a-o
        class="about-1__bg"
        :storyblok="true"
        :src="story.content.main_screen_image.filename"
        :scale="1"
        alt="Relive by Coco"
      />
      <TheTicker
        data-a-t
        tag="h1"
        title="Relive By Coco"
        text="Relive By Coco"
        aria-label="Relive By Coco"
        class="about-1__ticker"
        :divider="' '"
        :direction="-1"
      />
      <div class="container about-1__wrapper">
        <h2 class="grid about-1__title">
          <span data-a-h class="about-1__span-title"> Seriously playful </span>
          <span data-a-h class="about-1__span-title"> Rebellious and fun </span>
        </h2>
      </div>
    </section>
    <div class="section section--nm about-2">
      <div class="container about-2__wrapper">
        <p class="about-2__text">
          Relive by <span class="about-2__recife-text">Coco</span> is a
          creative, <span class="about-2__gerlomi-text">luxury</span> jewelry
          with a rebellious twist. A hand made brand designed and created using,
          <span class="about-2__gerlomi-text">new</span> and
          <span class="about-2__gerlomi-text">recycled</span> materials:
          <span class="about-2__gerlomi-text">vegan</span> and
          <span class="about-2__gerlomi-text">cruelty free</span>
        </p>
      </div>
    </div>
    <section class="section section--nm about-3">
      <div class="container about-3__wrapper">
        <h3 class="grid about-3__title">
          <span class="about-3__span-title"> freedom </span>
          <span class="about-3__span-title"> of </span>
          <span class="about-3__span-title"> expression </span>
        </h3>
        <div class="about-3__info">
          <ParallaxImg
            format="webp"
            quality="90"
            class="about-3__img"
            img-class="about-3__img"
            :storyblok="true"
            :src="story.content.third_screen_image.filename"
            alt="About image"
          />
          <p class="about-3__text">
            Coco believes in the power and freedom to express yourself, your
            mood and character through accessories that are fun and creative.
            She believes in a happy and colorful world for each person no matter
            their age, gender or social status
          </p>
          <div class="about-3__line-wrapper">
            <div class="about-3__line"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="section section--nm about-4">
      <div class="container about-4__wrapper">
        <div class="grid about-4__text-wrapper">
          <p class="about-4__text">To remember to be Playfull is important!</p>
          <p class="about-4__text">
            seriousness makes us old and grumpy sometimes
          </p>
          <p class="about-4__text">
            That’s why Coco makes jewelry that is fun and
          </p>
          <p class="about-4__text">can be styled with almost anything.</p>
        </div>
        <div class="about-4__line-wrapper">
          <div class="about-4__line"></div>
        </div>
        <div class="grid about-4__desc-wrapper">
          <p class="about-4__desc">
            Our charms can be switched around, depending on your mood and
            outfit. That gives you the opportunity to express yourself through
            the charms you pick and never get bored
          </p>
        </div>
        <Bears />
      </div>
    </div>
    <section class="section section--nm about-5">
      <div class="grid about-5__wrapper">
        <ParallaxImg
          class="about-5__img"
          img-class="about-5__img"
          :scale="1"
          :storyblok="true"
          :src="story.content.fourth_screen_image.filename"
          alt="About image"
        />
        <div class="container about-5__info-wrapper">
          <h3 class="grid about-5__title">
            <span class="about-5__span-title"> And </span>
            <span class="about-5__span-title"> who is </span>
            <span class="about-5__span-title"> Coco... </span>
          </h3>
          <p class="about-5__desc">
            ...She is the child in all of us, dreaming of a colorful and fun
            world. Creating jewelry for everyone to spread happiness and
            positivity
          </p>
        </div>
      </div>
    </section>
    <div class="section section--nm about-6">
      <div class="container about-6__wrapper">
        <p class="about-6__text">
          Our <span class="about-6__gerlomi-text">a handmade</span> products
          made by a little 8 year old girl that loves fashion, music, dance &
          rock&roll. This is a
          <span class="about-6__gerlomi-text">unisex</span> products
          <span class="about-6__gerlomi-text">for all ages</span>
        </p>
      </div>
    </div>
  </main>
</template>
