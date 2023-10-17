import { iCartItem } from '~/types/products'
import CheckoutService from '~~/api/checkout-service'

export const useShopify = () => {
  const createCheckout = async (items: iCartItem[]) => {
    try {
      const res = await CheckoutService.createCheckout(
        items,
        window?.location?.origin
      )

      if (!res?.data?.webUrl) {
        throw new Error('No webUrl returned from Shopify')
      }

      localStorage.setItem('checkoutItems', JSON.stringify(items))

      window.location.href = res?.data?.webUrl
      return res?.data?.session?.webUrl
    } catch (error) {
      throw error?.message
    }
  }

  return { createCheckout }
}
