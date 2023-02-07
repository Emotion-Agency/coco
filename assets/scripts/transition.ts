import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'

export const pageTransition: TransitionProps = {
  duration: 250,
  mode: 'out-in',
  css: false,
  appear: true,
  onEnter(el, done) {
    gsap.fromTo(
      el,
      { opacity: 0 },
      { duration: 0.5, opacity: 1, onComplete: done }
    )
  },
  onLeave(el, done) {
    gsap.fromTo(
      el,
      { opacity: 1 },
      { duration: 0.5, opacity: 0, onComplete: done }
    )
  },
}
