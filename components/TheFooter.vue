<script setup lang="ts">
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

const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      id: 'email',
      name: 'Email',
      label: 'Your Email',
      type: 'email',
      validation: 'email',
      validationText: 'incorrect email',
      error: true,
      value: '',
    },
  ],
})

const { isCartOpen } = useCart()
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
          Massa nullam feugiat vestibulum tincidunt arcu facilisis. Diam proin
          est nunc consectetur egestas. Neque egestas habitasse feugiat
          pellentesque velit. Ultricies.
        </p>
        <div class="footer__gallery-wrapper">
          <ul class="footer__gallery">
            <li
              v-for="(el, idx) in galleryImages"
              :key="idx"
              class="footer__gallery-item"
            >
              <a :href="el.link" target="_blank" rel="noreferrer noopener">
                <img class="footer__img" :src="el.imgUrl" alt="Background" />
              </a>
            </li>
          </ul>
          <IconsBigDiamond class="footer__icon" />
        </div>
        <div class="footer__button-wrapper">
          <TextButton class="footer__top-btn">See more →</TextButton>
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
                  <p class="footer__social-text">Fb</p>
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
                  <p class="footer__social-text">Insta</p>
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
                  <p class="footer__social-text">tik tok</p>
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
                  <p class="footer__contacts-number">01</p>
                  <p class="footer__contacts-text">Coco@GMAIL.COM</p>
                </a>
              </li>
              <li class="footer__contacts-li">
                <a class="footer__contacts-link" href="tel:10223332222">
                  <p class="footer__contacts-number">02</p>
                  <p class="footer__contacts-text">+1 (022) 333 2222</p>
                </a>
              </li>
              <li class="footer__contacts-li">
                <a
                  class="footer__contacts-link"
                  href="https://wa.me/+10223332222"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p class="footer__contacts-number">03</p>
                  <p class="footer__contacts-text">Whatsapp</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__pages">
            <p class="footer__pages-title">Other pages</p>
            <ul class="footer__pages-list">
              <li class="footer__pages-li">
                <NuxtLink to="/" class="footer__pages-link">
                  <p class="footer__pages-number">01</p>
                  <p class="footer__pages-text">home</p>
                </NuxtLink>
              </li>
              <li class="footer__pages-li">
                <button class="footer__pages-link" @click="isCartOpen = true">
                  <p class="footer__pages-number">02</p>
                  <p class="footer__pages-text">bag</p>
                </button>
              </li>
              <li class="footer__pages-li">
                <NuxtLink to="/shop/" class="footer__pages-link">
                  <p class="footer__pages-number">03</p>
                  <p class="footer__pages-text">Shop</p>
                </NuxtLink>
              </li>
              <li class="footer__pages-li">
                <NuxtLink to="/about/" class="footer__pages-link">
                  <p class="footer__pages-number">04</p>
                  <p class="footer__pages-text">about</p>
                </NuxtLink>
              </li>
              <li class="footer__pages-li">
                <NuxtLink to="/contacts/" class="footer__pages-link">
                  <p class="footer__pages-number">05</p>
                  <p class="footer__pages-text">contacts</p>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <form class="footer__form" novalidate>
            <legend class="footer__form-title">Follow us</legend>
            <TheInput
              v-for="input in formData.inputs"
              :id="input.id"
              :key="input.id"
              ref="$inputs"
              class="footer__input"
              :type="input.type"
              :placeholder="input.label"
              :required="input.required"
              :validation-text="input.validationText && input.validationText"
              :validation="input.validationText && input.validation"
            />
          </form>
        </div>
        <div class="footer__info-wrapper">
          <div class="footer__left-info">
            <IconsPlanet />
            <div class="footer__info-details">
              <p class="footer__country">USA, NYC</p>
              <p class="footer__date">[12/14/2022 6:00 AM]</p>
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
    <TheTicker
      text="Next page: [About]"
      class="footer__ticker"
      :multiplier="100"
      divider="/"
    />
  </footer>
</template>
