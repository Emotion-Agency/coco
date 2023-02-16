import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { resetScroll } from './utils/resetScroll'

export const pageTransition: TransitionProps = {
  duration: 250,
  mode: 'in-out',
  css: false,
  appear: true,
  onEnter(el, done) {
    gsap.fromTo(
      el,
      { opacity: 0 },
      { duration: 0.5, opacity: 1, onComplete: done }
    )

    setTimeout(() => {
      resetScroll()
    }, 300)
  },
  onLeave(el, done) {
    gsap.fromTo(
      el,
      { opacity: 1 },
      { duration: 0.5, opacity: 0, onComplete: done }
    )
  },
}
