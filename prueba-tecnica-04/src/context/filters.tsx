import { createContext, useState } from 'react'

export const FiltersContext = createContext<{
  filters: {
    category: string
    minPrice: number
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      category: string
      minPrice: number
    }>
  >
}>({} as any)

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
