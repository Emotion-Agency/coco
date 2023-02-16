type TFunc = () => void

export class Resize {
  cbArray: Array<null | TFunc>
  constructor() {
    this.cbArray = []
    this.init()
  }

  bounds() {
    const methods = ['resizeHandler']
    methods.forEach(fn => {
      this[fn] = this[fn].bind(this)
    })
  }

  init() {
    this.bounds()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resizeHandler)
    }
  }

  resizeHandler() {
    this.cbArray.forEach(cb => cb())
  }

  on(cb: TFunc): void {
    cb()
    this.cbArray.push(cb)
  }

  off(cb: TFunc): void {
    this.cbArray = this.cbArray.filter(e => e !== cb)
  }

  destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeHandler)
    }
  }
}

const resizeInstance = new Resize()

export const resize = {
  on: (cb: TFunc): void => resizeInstance.on(cb),
  off: (cb: TFunc): void => resizeInstance.off(cb),
}
