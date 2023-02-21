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
    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import('~~/assets/scripts/appAnimation')
      setTimeout(() => {
        appAnimation()
      }, 800)
    }
  })
}
