<script lang="ts" setup>
interface iProps {
  tag?: string
  href?: string
  type?: string
  isWhite?: boolean
}

const props = defineProps<iProps>()

const tag = computed(() => {
  if (props.tag === 'nuxt-link') {
    return resolveComponent('NuxtLink')
  } else return props.tag ?? 'button'
})

const to = props.tag === 'nuxt-link' ? props.href : undefined
const href = props.tag === 'a' ? props.href : undefined
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="props.tag === 'a' ? '_blank' : undefined"
    :rel="props.tag === 'a' ? 'noreferer noopener' : undefined"
    :type="props.type"
    class="text-btn"
  >
    <span class="text-btn__text">
      <slot />
    </span>
    <span class="text-btn__icon"
      ><svg
        width="74"
        height="49"
        viewBox="0 0 74 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 29.6998H55.6L43 42.2998L49.3 48.6998L73.5 24.4998L49.3 0.299805L43 6.69981L55.5 19.1998H0V29.6998Z"
          fill="#333333"
        />
      </svg>
    </span>
  </component>
</template>
