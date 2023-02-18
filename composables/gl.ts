import emitter from 'tiny-emitter/instance.js'
import { Ref } from 'nuxt/dist/app/compat/capi'
import { cloneNode } from '~~/assets/scripts/utils/cloneNode'

export const useGL = ($items: Ref<NodeListOf<HTMLElement>>) => {
  const isSceneCreated = useState('isSceneCreated', () => false)

  const createScene = async () => {
    try {
      if (!isSceneCreated.value) {
        const { Scetch } = await import('@emotionagency/glhtml')
        const { raf } = await import('@emotionagency/utils')

        window.scetch = new Scetch('#gl', {
          raf,
          dpr: window.devicePixelRatio,
        })

        emitter.emit('scetchCreated')
        isSceneCreated.value = true
      }
    } catch (error) {
      console.log(error)
    }
  }

  const router = useRouter()

  const startTransition = (e: Event) => {
    const target = e.currentTarget as HTMLElement
    const href = target.getAttribute('href')
    const clicked = target.querySelector('[data-gl]')
    clicked.classList.add('js-clicked')
    document.body.classList.add('gl-transition')
    cloneNode(clicked)

    router.push(href)
  }

  onMounted(async () => {
    try {
      const { initImages } = await import('~/assets/scripts/GL/Images/init')
      if (isSceneCreated.value) {
        initImages(
          [...$items.value].map(item => item.querySelector('[data-gl]'))
        )
      } else {
        await createScene()
        initImages(
          [...$items.value].map(item => item.querySelector('[data-gl]'))
        )
      }
    } catch (error) {
      console.log(error)
    }
  })

  onBeforeUnmount(() => {
    try {
      const images = [...$items.value].map(item =>
        item.querySelector('[data-gl-id]')
      )

      images.forEach((img: HTMLElement) => {
        window.scetch.removeFigure(img.dataset.glId)
      })
    } catch (error) {
      console.log(error)
    }
  })

  return { isSceneCreated, createScene, startTransition }
}
