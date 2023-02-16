// import { iCartItem, iItem } from '~/types/products'
// import CartService from '~~/api/cart-service'

export const useCart = () => {
  const isCartOpen = useState('cartOpen', () => false)
  // const cartItems = useState<iCartItem[]>('cartItems', () => [])

  // const { isAuth } = useAuth()

  // const addToCart = async (item: iItem) => {
  //   const findItem = cartItems.value.find(ci => ci.id === item.id)

  //   if (findItem) {
  //     cartItems.value = cartItems.value.filter(ci => ci.id !== findItem.id)
  //     cartItems.value = [
  //       ...cartItems.value,
  //       { ...item, quantity: findItem.quantity + 1 },
  //     ]
  //     await CartService.addCartItem({
  //       ...item,
  //       quantity: findItem.quantity + 1,
  //     })
  //     return
  //   }

  //   cartItems.value = [...cartItems.value, { ...item, quantity: 1 }]
  //   await CartService.addCartItem({ ...item, quantity: 1 })
  // }

  // const removeItem = async (item: iCartItem) => {
  //   cartItems.value = cartItems.value.filter(ci => ci.id !== item.id)

  //   await CartService.removeCartItem(item)
  // }

  // const decreaseQuantity = async (item: iCartItem) => {
  //   removeItem(item)
  //   if (item.quantity > 1) {
  //     cartItems.value = [
  //       ...cartItems.value,
  //       { ...item, quantity: item.quantity - 1 },
  //     ]

  //     await CartService.addCartItem({ ...item, quantity: item.quantity - 1 })
  //   }
  // }

  // const increaseQuantity = async (item: iCartItem) => {
  //   removeItem(item)
  //   cartItems.value = [
  //     ...cartItems.value,
  //     { ...item, quantity: item.quantity + 1 },
  //   ]
  //   await CartService.addCartItem({ ...item, quantity: item.quantity + 1 })
  // }

  // const getCartItems = async () => {
  //   const itemFromLS = process.client
  //     ? JSON.parse(localStorage.getItem('cart') || '[]')
  //     : []

  //   try {
  //     const res = await CartService.getCart()
  //     cartItems.value = isAuth.value ? res?.data || [] : itemFromLS
  //     return res
  //   } catch (e) {
  //     cartItems.value = itemFromLS
  //     throw e.response?.data?.message || e
  //   }
  // }

  // const clearCart = async () => {
  //   try {
  //     const res = await CartService.clearCart()
  //     cartItems.value = []
  //     return res
  //   } catch (e) {
  //     throw e.response?.data?.message || e
  //   }
  // }

  // watch(cartItems, () => {
  //   process.client &&
  //     localStorage.setItem('cart', JSON.stringify(cartItems.value))
  // })

  return {
    isCartOpen,
    // cartItems,
    // addToCart,
    // decreaseQuantity,
    // increaseQuantity,
    // removeItem,
    // getCartItems,
    // clearCart,
  }
}
