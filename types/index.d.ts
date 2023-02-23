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
  __typename: 'GraphImage' | 'GraphVideo'
  id: string
  video_url?: string
  shortcode: string
  display_url: string
  full_url: string
}
