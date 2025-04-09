import { results as initialResults } from './mocks/data.json'
import { useState } from 'react'
import { Products, Header } from './components'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'

function App() {
  const [products] = useState(initialResults)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <div className='bg-gray-900 min-h-screen p-6 sm:p-8 md:p-12 font-sans'>
        <Header />
        <Products products={filteredProducts} />
      </div>
    </CartProvider>
  )
}

export default App
