import emitter from 'tiny-emitter/instance.js'
import { cloneNode } from '~~/assets/scripts/utils/cloneNode'

export const useGL = () => {
  const isSceneCreated = useState('isSceneCreated', () => false)
  const { isMobile } = useMobile()

  const createScene = async () => {
    try {
      if (!isSceneCreated.value && !isMobile.value) {
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

    // if (isMobile.value) {
    //   router.push(href)
    //   return
    // }

    const clicked = target.querySelector('[data-gl]')
    clicked.classList.add('js-clicked')
    document.body.classList.add('gl-transition')
    cloneNode(clicked)

    router.push(href)
  }

  const initImages = async ($items: NodeListOf<HTMLElement>) => {
    try {
      const { initImages } = await import('~/assets/scripts/GL/Images/init')
      if (isSceneCreated.value) {
        initImages([...$items].map(item => item.querySelector('[data-gl]')))
      } else {
        await createScene()
        initImages([...$items].map(item => item.querySelector('[data-gl]')))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const destroyImages = ($items: NodeListOf<HTMLElement> | HTMLElement[]) => {
    try {
      const images = [...$items]
        .map(item => item.querySelector('[data-gl-id]:not(.js-clicked)'))
        .filter(item => item)

      images.forEach((img: HTMLElement) => {
        window.scetch && window.scetch.removeFigure(img.dataset.glId)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    isSceneCreated,
    createScene,
    startTransition,
    initImages,
    destroyImages,
  }
}
