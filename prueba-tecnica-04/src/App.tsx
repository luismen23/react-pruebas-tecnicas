import { results as initialResults } from './mocks/data.json'
import { useState } from 'react'
import { Products } from './components/Products'
import Header from './components/Header'

function App() {
  const [products] = useState(initialResults)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

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

  const filteredProducts = filterProducts(products)
  return (
    <div className='bg-gray-900 min-h-screen p-6 sm:p-8 md:p-12 font-sans'>
      <Header />
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
