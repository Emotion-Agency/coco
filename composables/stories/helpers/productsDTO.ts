import { iProductContent, iStory } from '~~/types/story'

export const productsDTO = (productsData: iStory<iProductContent>[]) => {
  return productsData.map((product, idx) => {
    return {
      id: product.id,
      idx,
      disableForSale: product.content.disable_for_sale,
      description: product.content.description,
      how_to_use: product.content.how_to_use,
      details: product.content.details,
      title: product.name,
      images: product.content?.images || [],
      mainImage:
        (product.content?.images?.length &&
          product.content?.images[0]?.filename) ||
        null,
      price: product.content.price,
      compare_price: product.content.compare_price,
      slug: product.slug,
      collection: product.content.collection,
    }
  })
}
