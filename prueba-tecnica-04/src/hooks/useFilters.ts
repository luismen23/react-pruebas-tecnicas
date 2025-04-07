import { useContext } from 'react'
import { FiltersContext } from '@/context/filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  interface ProductsTypes {
    asin: string
    title: string
    price: number
    rating: number
    reviews_count: number
    image_url: string
    product_url: string
    brand: string
    category: string
  }

  // filtrar por categoria y precio
  const filterProducts = (products: ProductsTypes[]) => {
    return products.filter((product: { price: number; category: string }) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filterProducts, filters, setFilters }
}
