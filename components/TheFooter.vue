<script setup lang="ts">
import { dateHandler } from '~~/assets/scripts/getDate'
import { useContactsStory } from '~~/composables/stories/contactsStory'

const { story } = await useContactsStory()

const instaPosts = computed(() => {
  return story.value.content.insta_images.map(ii => ii.link)
})

const phone = computed(() => {
  const phoneNumber = story.value.content.Phone.replace(/\D/gm, '')

  const formattedPhoneNumber = phoneNumber.replace(
    /^(\d{1})(\d{3})(\d{3})(\d{4})$/,
    '+$1 ($2) $3 $4'
  )

  return {
    phoneNumber,
    formattedPhoneNumber,
  }
})

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
      <FooterInstaPosts
        :instagram-url="story.content.Instagram"
        :posts-links="instaPosts"
      />
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
                  :href="story.content.Facebook"
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
                  :href="story.content.Instagram"
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
                  :href="story.content.TikTok"
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
              <li v-if="story.content.Email" class="footer__contacts-li">
                <a
                  class="footer__contacts-link"
                  :href="`mailto:${story.content.Email}`"
                >
                  <span class="footer__contacts-text">{{
                    story.content.Email
                  }}</span>
                </a>
              </li>
              <li v-if="story.content.Phone" class="footer__contacts-li">
                <a
                  class="footer__contacts-link"
                  :href="`tel:${phone.phoneNumber}`"
                >
                  <span class="footer__contacts-text">
                    {{ phone.formattedPhoneNumber }}
                  </span>
                </a>
              </li>
              <li v-if="story.content.WhatsApp" class="footer__contacts-li">
                <a
                  class="footer__contacts-link"
                  :href="`https://wa.me/${story.content.WhatsApp}`"
                  target="_blank"
                  rel="noreferrer noopener"
                >
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
              ?? 2023.Relieve by coco. All rights reserved
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
