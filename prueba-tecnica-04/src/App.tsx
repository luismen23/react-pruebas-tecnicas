import { results as initialResults } from './mocks/data.json'
import { useState } from 'react'
import { Products } from './components/Products'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters'

function App() {
  const [products] = useState(initialResults)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <div className='bg-gray-900 min-h-screen p-6 sm:p-8 md:p-12 font-sans'>
      <Header />
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
