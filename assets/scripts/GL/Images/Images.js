import gsap from 'gsap'
import { lerp } from '@emotionagency/utils'
import { Figure } from '@emotionagency/glhtml'

import fragment from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'

export default class Images extends Figure {
  textureLoaded = false

  constructor(scene, renderer, $el) {
    super(scene, renderer, $el)

    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onClick = this.onClick.bind(this)

    this.$el?.parentElement?.addEventListener('mouseenter', this.onMouseEnter)
    this.$el?.parentElement?.addEventListener('mouseleave', this.onMouseLeave)
    this.$el?.parentElement?.addEventListener('click', this.onClick)
  }

  createGeometry() {
    super.createGeometry({ widthSegments: 64, heightSegments: 64 })
  }

  async uploadTextures() {
    const fileName = this.$el.getAttribute('src')

    this.texture = await this.uploadTexture(fileName)

    this.textureLoaded = true
  }

  get borderRadius() {
    const $el = this.$el.closest('.picture-wrapper')
    const borderRadius = window.getComputedStyle($el).borderRadius
    return parseInt(borderRadius)
  }

  createMaterial() {
    const uniforms = {
      uTexture: { type: 't', value: this.texture },
      uColorTexture: { type: 't', value: this.texture },
      uScale: { value: 0 },
      uHover: { value: 0 },
      uClicked: { value: 0 },
      uStrength: { value: 0 },
      uViewportY: { value: window.innerHeight },
      uViewportX: { value: window.innerWidth },
      uScrollPos: { value: 0 },
      uVisible: { value: 1 },
    }

    super.createMaterial({ uniforms, vertex, fragment })

    if (this.$el.classList.contains('img-hidden') && window.innerWidth > 960) {
      this.material.uniforms.uVisible.value = 0
    }
  }

  async createMesh() {
    await this.uploadTextures()
    super.createMesh()

    if (this.$el.classList.contains('project-1__img')) {
      this.material.uniforms.uCompleted.value = 1
      this.material.uniforms.uClicked.value = 1
      this.material.uniforms.uParallax.value = 1
    }
  }

  get scrollPos() {
    return window.ss?.state?.scrolled ?? 0
  }

  get velocity() {
    const target = window.ss?.state?.target ?? 0
    return this.isScrolling ? this.scrollPos - target : 0
  }

  get isScrolling() {
    return window.ss?.state?.scrolling ?? false
  }

  get visibility() {
    return +this.$el.dataset.aGlProgress ?? 1
  }

  onClick() {
    gsap.to(this.material.uniforms.uClicked, {
      duration: 2,
      value: 1,
      delay: 0.4,
      ease: 'power2.out',
    })
  }

  onMouseEnter() {
    gsap.to(this.material.uniforms.uHover, {
      duration: 2,
      value: 1,
      ease: 'power2.out',
      overwrite: true,
    })
    gsap.to(this.material.uniforms.uScale, {
      duration: 2,
      value: 0.02,
      ease: 'power1.inOut',
      overwrite: true,
    })
  }

  onMouseLeave() {
    gsap.to(this.material.uniforms.uHover, {
      duration: 1,
      value: 0,
      ease: 'power2.out',
      overwrite: true,
    })
    gsap.to(this.material.uniforms.uScale, {
      duration: 1,
      value: 0,
      ease: 'power2.out',
      overwrite: true,
    })
  }

  resize() {
    super.resize()
  }

  update() {
    super.update()
    if (this.material) {
      let strength = this.velocity / 250
      strength = lerp(this.material.uniforms.uStrength.value, strength, 0.08)
      this.material.uniforms.uStrength.value = strength
      this.material.uniforms.uVisible.value = this.visibility
    }
  }

  destroy() {
    this.$el?.parentElement?.removeEventListener(
      'mouseenter',
      this.onMouseEnter
    )
    this.$el?.parentElement?.removeEventListener(
      'mouseleave',
      this.onMouseLeave
    )
    this.$el?.parentElement?.removeEventListener('mouseleave', this.onClick)

    this.disposeTexture(this.texture)
    super.destroy()
  }
}
