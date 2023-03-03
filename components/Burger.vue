<script lang="ts" setup>
import gsap from 'gsap'
import { clamp, raf } from '~/assets/scripts/utils/ea'

interface iNavItem {
  link: string
  text: string
}

interface iProps {
  navItems: iNavItem[]
}

defineProps<iProps>()

const isBurgerOpen = ref(false)
const isBurgerVisible = ref(true)

const $item = ref<HTMLElement>(null)
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

const detectBottom = () => {
  const top = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - window.innerHeight

  isBurgerVisible.value = !(top > height - 200)
}

onMounted(() => {
  document.body.addEventListener('click', closeBurger)

  raf.on(detectBottom)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('click', closeBurger)
  raf.off(detectBottom)
})
</script>

<template>
  <Teleport to="#app">
    <div
      class="burger-wrapper"
      :class="[!isBurgerVisible && 'burger-wrapper--hidden']"
    >
      <button
        ref="$item"
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
</template>
