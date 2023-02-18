import { iItem } from '~/types/products'

export const useProducts = () => {
  const products = useState<iItem[]>('products', () => [])

  return { products }
}
