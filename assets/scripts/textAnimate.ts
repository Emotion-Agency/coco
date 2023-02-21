import gsap from 'gsap'
import SplitType from 'split-type'
import { clamp } from './utils/ea'

const textAnimate = () => {
  let $toAnimate: HTMLElement[]

  const prepare = ($el: HTMLElement) => {
    if ($el.classList.contains('splitted')) {
      return
    }

    const text = new SplitType($el, {
      types: 'chars, words',
      tagName: 'span',
    })

    text.chars?.forEach(char => {
      char.innerHTML = `<span class="char-inner">${char.innerHTML}</span>`
      char.setAttribute('data-char', char.innerText)
    })

    $toAnimate = [...$el.querySelectorAll('.char')] as HTMLElement[]
    $el.classList.add('splitted')
  }

  return {
    in: ($el: HTMLElement) => {
      prepare($el)
      $el.style.opacity = '1'

      const duration = clamp(16 / $toAnimate.length, 0.75, 2)

      gsap.to($toAnimate, {
        duration,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        opacity: 1,
        ease: 'expo.out',
        stagger: 0.06,
        overwrite: true,
      })
    },
    out: ($el: HTMLElement, to = '110%') => {
      prepare($el)

      gsap.to($toAnimate, {
        duration: 1,
        x: to,
        opacity: 0,
        ease: 'expo.out',
        stagger: 0.02,
        overwrite: true,
      })
    },
  }
}

export default textAnimate()
