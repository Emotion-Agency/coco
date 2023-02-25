export const useTitleChanger = () => {
  const blurTitle = "Going somewhere? Don't forger about us:)"
  const originalTitle = ref(null)

  const handleVisibilityChange = () => {
    if (document.hidden) {
      originalTitle.value = document.title
      setTimeout(() => {
        document.title = blurTitle
      }, 0)
    } else {
      document.title = originalTitle.value
    }
  }

  onMounted(() => {
    originalTitle.value = document.title
    document.addEventListener('visibilitychange', handleVisibilityChange)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    document.title = originalTitle.value
  })
}
