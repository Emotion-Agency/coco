import { iProductContent, iStory } from '~~/types/story'

export const productsDTO = (productsData: iStory<iProductContent>[]) => {
  return productsData.map(product => {
    return {
      id: product.id,
      disableForSale: product.content.disable_for_sale,
      description: product.content.description,
      title: product.name,
      images: product.content.images,
      mainImage: product.content.images[0]?.filename,
      price: product.content.price,
      compare_price: product.content.compare_price,
      slug: product.slug,
      collection: product.content.collection,
    }
  })
}
