export interface iItem {
  id: number
  disableForSale: boolean
  description: string
  how_to_use: string
  product_vibes: string
  title: string
  images: any[]
  mainImage: string
  price: number
  compare_price: number | undefined
  slug: string
  collection: string
}

export interface iCartItem extends iItem {
  quantity: number
}
