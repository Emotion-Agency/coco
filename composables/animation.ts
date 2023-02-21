import { resetScroll } from '~~/assets/scripts/utils/resetScroll'

export const useAnimation = () => {
  const { isLoaded, isInEditor } = useAppState()

  watch(isLoaded, async () => {
    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import('~~/assets/scripts/appAnimation')
      setTimeout(() => {
        appAnimation()
      }, 150)
    }
  })

  onMounted(async () => {
    setTimeout(() => {
      resetScroll()
    }, 500)

    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import('~~/assets/scripts/appAnimation')
      setTimeout(() => {
        appAnimation()
      }, 800)
    }
  })
}
