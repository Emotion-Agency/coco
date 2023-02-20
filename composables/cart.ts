import { iCartItem, iItem } from '~/types/products'

export const useCart = () => {
  const isCartOpen = useState('cartOpen', () => false)
  const cartItems = useState<iCartItem[]>('cartItems', () => [])
  const { addToast } = useToasts()

  const addToCart = (item: iItem) => {
    const findItem = cartItems.value.find(ci => ci.id === item.id)

    addToast({
      color: ToastColor.primary,
      id: Date.now().toString(),
      text: `${item.title} added to bag`,
    })

    if (findItem) {
      cartItems.value = cartItems.value.filter(ci => ci.id !== findItem.id)
      cartItems.value = [
        ...cartItems.value,
        { ...item, quantity: findItem.quantity + 1 },
      ]

      return
    }

    cartItems.value = [...cartItems.value, { ...item, quantity: 1 }]
  }

  const removeItem = (item: iCartItem) => {
    cartItems.value = cartItems.value.filter(ci => ci.id !== item.id)
  }

  const decreaseQuantity = (item: iCartItem) => {
    removeItem(item)
    if (item.quantity > 1) {
      cartItems.value = [
        ...cartItems.value,
        { ...item, quantity: item.quantity - 1 },
      ]
    }
  }

  const increaseQuantity = (item: iCartItem) => {
    removeItem(item)
    cartItems.value = [
      ...cartItems.value,
      { ...item, quantity: item.quantity + 1 },
    ]
  }

  const getCartItems = () => {
    const itemFromLS = process.client
      ? JSON.parse(localStorage.getItem('cart') || '[]')
      : []

    cartItems.value = itemFromLS
    return cartItems.value
  }

  const clearCart = () => {
    cartItems.value = []
  }

  watch(cartItems, () => {
    process.client &&
      localStorage.setItem('cart', JSON.stringify(cartItems.value))
  })

  return {
    isCartOpen,
    cartItems,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
    getCartItems,
    clearCart,
  }
}
