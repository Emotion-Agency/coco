export interface iItem {
  id: number
  idx: number
  disableForSale: boolean
  description: string
  how_to_use: string
  details: string
  title: string
  images: any[]
  mainImage: string
  price: string
  compare_price: string | undefined
  slug: string
  collection: string
}

export interface iCartItem extends iItem {
  quantity: number
}
