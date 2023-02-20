import { resize, raf } from './utils/ea'

export default class SectionParallax {
  $section1: HTMLElement
  $section2: HTMLElement

  constructor($section1: HTMLElement, $section2: HTMLElement) {
    this.$section1 = $section1
    this.$section2 = $section2

    this.init()
  }

  init() {
    this.onResize = this.onResize.bind(this)
    this.onUpdate = this.onUpdate.bind(this)

    resize.on(this.onResize)
    raf.on(this.onUpdate)
  }

  onResize() {
    this.$section2.style.setProperty('--over', this.bounds.height + 'px')
  }

  onUpdate() {
    if (this.scrollPos > this.bounds.height) {
      this.$section1.classList.remove('js-absolute')
      this.$section2.classList.remove('js-over')
    } else {
      this.$section1.classList.add('js-absolute')
      this.$section2.classList.add('js-over')

      this.$section1.querySelector('video').style.transform = `scale(${
        1 + this.scrollPos / 1000
      })`
    }
  }

  get scrollPos(): number {
    return window?.ss?.state?.scrolled || 0
  }

  get bounds(): DOMRect {
    return this.$section1.getBoundingClientRect()
  }

  destroy() {
    resize.off(this.onResize)
    raf.off(this.onUpdate)
    this.$section1.classList.remove('js-absolute')
    this.$section2.classList.remove('js-over')
  }
}
