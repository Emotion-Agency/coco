import { iCartItem } from '~/types/products'
import CheckoutService from '~~/api/checkout-service'

export const useShopify = () => {
  const createCheckout = async (items: iCartItem[]) => {
    try {
      localStorage.setItem('checkoutItems', JSON.stringify(items))

      const res = await CheckoutService.createCheckout(
        items,
        window?.location?.origin
      )

      window.location.href = res?.data?.webUrl
      return res?.data?.session?.webUrl
    } catch (error) {
      throw error?.message
    }
  }

  return { createCheckout }
}
