type TFunc = {
  t: HTMLElement | Element
  cb: () => void
}

const mutationObserver = (
  target: TFunc['t'],
  outsideCallback: TFunc['cb']
): (() => void) => {
  const config = {
    childList: true,
  }

  const callback = function (mutationsList: any[]) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        outsideCallback()
        // console.log('A child node has been added or removed.')
      }
    }
  }
  const observer = new MutationObserver(callback)

  observer.observe(target, config)
  return () => observer.disconnect()
}

export default mutationObserver
