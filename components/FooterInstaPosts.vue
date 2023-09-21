<script lang="ts" setup>
interface ILink {
  imageUrl: string
  link: string
}

interface iProps {
  instagramUrl: string
  postsLinks: ILink[]
}

defineProps<iProps>()

// const postsLinks = [
//   'https://www.instagram.com/p/Cn5bDCRJJ-u/',
//   'https://www.instagram.com/p/CmffdZoDrln/',
//   'https://www.instagram.com/p/CoQp6tdpYwQ/',
//   'https://www.instagram.com/p/CoDNDWSJmBX/',
//   'https://www.instagram.com/p/CoALtsEu3-W/',
//   'https://www.instagram.com/p/Cn8A82EJtgW/',
//   'https://www.instagram.com/p/CmZsECTprWZ/',
//   'https://www.instagram.com/p/Cnc6i9wJbTJ/',
//   'https://www.instagram.com/p/Clco2qzj0eI/',
//   'https://www.instagram.com/p/Clbfz1VrUcU/',
// ]
</script>

<template>
  <ClientOnly>
    <div class="footer__top-block">
      <div data-a-t class="footer__logo-wrapper">
        <IconsBigLogo class="footer__logo" />
      </div>
      <h3 class="grid footer__top-title">
        <span data-a-h class="footer__span-title"> Check </span>
        <span data-a-h class="footer__span-title"> Our </span>
        <span data-a-h class="footer__span-title"> Insta </span>
      </h3>
      <p data-a-t class="footer__description">
        We believe that together we can create a better future, and we invite
        you to be a part of it. Follow us now and let's make a difference!
      </p>
      <div v-if="postsLinks.length" data-a-o class="footer__gallery-wrapper">
        <ul class="footer__gallery">
          <li
            v-for="(el, idx) in postsLinks"
            :key="idx"
            class="footer__gallery-item"
          >
            <a
              :href="el.link"
              target="_blank"
              rel="noreferrer noopener"
              class="footer__gallery-link"
            >
              <TheImg
                v-if="el.imageUrl"
                class="footer__img"
                :src="el.imageUrl"
                alt="Background"
              />
            </a>
          </li>
        </ul>
        <IconsBigDiamond class="footer__icon" />
      </div>
      <div class="footer__button-wrapper">
        <TextButton tag="a" :href="instagramUrl" class="footer__top-btn"
          >IG page</TextButton
        >
      </div>
    </div>
  </ClientOnly>
</template>
