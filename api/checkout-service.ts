import $api from './axiosInstance'
import { iCartItem } from '~~/types/products'

export default class CheckoutService {
  static createCheckout = async (items: iCartItem[], domain: string) => {
    const res = await $api.post('/shopify/checkout', {
      items,
      domain,
    })
    console.log(res)
    return res
  }
}
