export const useMobile = () => {
  const isMobile = useState('isMobile', () => true)

  const resizeHandler = () => {
    isMobile.value = window?.innerWidth <= 1060
  }

  let resizeFn

  onMounted(async () => {
    const { resize } = await import('~/assets/scripts/utils/ea')
    resizeFn = resize
    resizeFn.on(resizeHandler)
  })

  onBeforeUnmount(() => {
    resizeFn && resizeFn.off(resizeHandler)
  })

  return { isMobile }
}
