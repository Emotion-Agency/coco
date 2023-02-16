type TFunc = () => void

export class RAF {
  cbArray: Array<null | TFunc>
  constructor() {
    this.cbArray = []
    this.animation()
  }

  on(cb: TFunc): void {
    this.cbArray.push(cb)
  }

  off(cb: TFunc): void {
    this.cbArray = this.cbArray.filter(e => e !== cb)
  }

  animation(): void {
    this.cbArray.forEach(cb => cb())

    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(this.animation.bind(this))
    }
  }
}

const RAFInstance = new RAF()

export const raf = {
  on: (cb: TFunc): void => RAFInstance.on(cb),
  off: (cb: TFunc): void => RAFInstance.off(cb),
}
