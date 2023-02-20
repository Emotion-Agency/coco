<script setup lang="ts">
import { dateHandler } from '~~/assets/scripts/getDate'

const galleryImages = [
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/11.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/2.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/3.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/4.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/5.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/6.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/7.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/8.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/9.jpg',
  },
  {
    link: 'https://www.instagram.com/',
    imgUrl: '/images/footer/10.jpg',
  },
]

const { isCartOpen } = useCart()

const { nextPage } = useFooterLink()
const date = ref('')

let interval
onMounted(() => {
  date.value = dateHandler()
  interval = setInterval(() => {
    date.value = dateHandler()
  }, 10000)
})

onBeforeUnmount(() => {
  interval && clearInterval(interval)
})

const linkText = computed(() => {
  return `Next page: [${nextPage.value.text}]`
})
</script>

<template>
  <footer class="footer">
    <div class="container footer__wrapper">
      <div class="footer__top-block">
        <div class="footer__logo-wrapper">
          <IconsBigLogo class="footer__logo" />
        </div>
        <h3 class="grid footer__top-title">
          <span class="footer__span-title"> Check </span>
          <span class="footer__span-title"> Our </span>
          <span class="footer__span-title"> Insta </span>
        </h3>
        <p class="footer__description">
          We believe that together we can create a better future, and we invite
          you to be a part of it. Follow us now and let's make a difference!
        </p>
        <div class="footer__gallery-wrapper">
          <ul class="footer__gallery">
            <li
              v-for="(el, idx) in galleryImages"
              :key="idx"
              class="footer__gallery-item"
            >
              <a :href="el.link" target="_blank" rel="noreferrer noopener">
                <TheImg
                  format="webp"
                  quality="90"
                  class="footer__img"
                  :src="el.imgUrl"
                  alt="Background"
                />
              </a>
            </li>
          </ul>
          <IconsBigDiamond class="footer__icon" />
        </div>
        <div class="footer__button-wrapper">
          <TextButton class="footer__top-btn">See more</TextButton>
        </div>
      </div>
      <div class="footer__bottom-block">
        <div class="footer__dotted-line"></div>
        <h2 class="footer__bottom-title">Contact</h2>
        <div class="grid footer__menu">
          <p class="footer__bottom-text">
            Please contact me in any way you like
          </p>
          <div class="footer__social">
            <p class="footer__social-title">social</p>
            <ul class="footer__social-list">
              <li class="footer__social-li">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="footer__social-link"
                  rel="noreferrer noopener"
                >
                  [
                  <span class="footer__social-text">Fb</span>
                  ]
                </a>
              </li>
              <li class="footer__social-li">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  class="footer__social-link"
                  rel="noreferrer noopener"
                >
                  [
                  <span class="footer__social-text">Insta</span>
                  ]
                </a>
              </li>
              <li class="footer__social-li">
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  class="footer__social-link"
                  rel="noreferrer noopener"
                >
                  [
                  <span class="footer__social-text">tik tok</span>
                  ]
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__contacts">
            <p class="footer__contacts-title">Other contacts</p>
            <ul class="footer__contacts-list">
              <li class="footer__contacts-li">
                <a class="footer__contacts-link" href="mailto:coco@gmail.com">
                  <span class="footer__contacts-number">01</span>
                  <span class="footer__contacts-text">Coco@GMAIL.COM</span>
                </a>
              </li>
              <li class="footer__contacts-li">
                <a class="footer__contacts-link" href="tel:10223332222">
                  <span class="footer__contacts-number">02</span>
                  <span class="footer__contacts-text">+1 (022) 333 2222</span>
                </a>
              </li>
              <li class="footer__contacts-li">
                <a
                  class="footer__contacts-link"
                  href="https://wa.me/+10223332222"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span class="footer__contacts-number">03</span>
                  <span class="footer__contacts-text">Whatsapp</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__pages">
            <p class="footer__pages-title">Other pages</p>
            <ul class="footer__pages-list">
              <li class="footer__pages-li">
                <NuxtLink to="/" class="footer__pages-link">
                  <span class="footer__pages-number">01</span>
                  <span class="footer__pages-text">home</span>
                </NuxtLink>
              </li>
              <li class="footer__pages-li">
                <button class="footer__pages-link" @click="isCartOpen = true">
                  <span class="footer__pages-number">02</span>
                  <span class="footer__pages-text">bag</span>
                </button>
              </li>
              <li class="footer__pages-li">
                <NuxtLink to="/shop/" class="footer__pages-link">
                  <span class="footer__pages-number">03</span>
                  <span class="footer__pages-text">Shop</span>
                </NuxtLink>
              </li>
              <li class="footer__pages-li">
                <NuxtLink to="/about/" class="footer__pages-link">
                  <span class="footer__pages-number">04</span>
                  <span class="footer__pages-text">about</span>
                </NuxtLink>
              </li>
              <li class="footer__pages-li">
                <NuxtLink to="/contacts/" class="footer__pages-link">
                  <span class="footer__pages-number">05</span>
                  <span class="footer__pages-text">contacts</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <FooterForm />
        </div>
        <div class="footer__info-wrapper">
          <div class="footer__left-info">
            <IconsPlanet />
            <div class="footer__info-details">
              <p class="footer__country">USA, NYC</p>
              <p class="footer__date">{{ date }}</p>
            </div>
          </div>
          <div class="footer__right-info">
            <p class="footer__licence">
              © 2023.Relieve by coco. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink :to="nextPage.link">
      <TheTicker
        :text="linkText"
        class="footer__ticker"
        :multiplier="100"
        divider="/"
      />
    </NuxtLink>
  </footer>
</template>
