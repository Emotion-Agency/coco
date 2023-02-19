export const useObserver = ($node: string) => {
  let intersectionObserverInstance

  const initIntersectionObserver = async () => {
    const { intersectionObserver } = await import(
      '~/assets/scripts/utils/intersectionObserver'
    )

    intersectionObserverInstance = intersectionObserver
    setTimeout(() => {
      const sections = [...document.querySelectorAll($node)]
      sections.forEach(section => {
        intersectionObserverInstance(section).on()
      })
    }, 1000)
  }

  onMounted(async () => {
    await initIntersectionObserver()
  })

  onBeforeUnmount(() => {
    const sections = [...document.querySelectorAll($node)]
    sections.forEach(section => {
      intersectionObserverInstance(section).off()
    })
  })
}
