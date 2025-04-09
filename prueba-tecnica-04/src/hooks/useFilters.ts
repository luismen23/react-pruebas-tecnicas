import { useContext } from 'react'
import { FiltersContext } from '@/context/filters'
import { ProductsTypes } from '@/interfaces/interfaces'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

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
