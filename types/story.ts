export interface iMeta {
  title: string
  description?: string
  image?: {
    _uid: string
    filename: string
  }
}

export interface iLink {
  linktype: string
  url: string
  cached_url: string
}

export interface iStory<T = any> {
  content: T
  slug: string
  created_at: string
  first_published_at: string
  published_at: number
  name: string
  _uid: string
  uuid: string
  id: number
  title?: string
  meta?: iMeta[]
}

export interface iImage {
  _uid: string
  filename: string
  name?: string
  alt?: string
}

export interface iProductContent {
  uuid: string
  disable_for_sale: boolean
  description: string
  product_vibes: string
  how_to_use: string
  images: iImage[]
  price: number
  compare_price: number
  slug: string
  collection: string
}
