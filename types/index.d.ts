export {}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ss: any
    scetch: any
    parallax: any
    noise: any
  }
}

export interface iInstaPost {
  postUrl: string
  postMedia: string
  fromDb?: boolean
}
