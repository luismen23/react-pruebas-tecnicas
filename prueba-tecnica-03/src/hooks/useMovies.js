import { useCallback, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies() {
  const [resultsMovies, setResultsMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousSearch = useRef('')

  const getMovies = useCallback(async search => {
    // evitar misma busqueda dos o mas veces
    if (search === previousSearch.current) return
    // recuperar movies
    try {
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setResultsMovies(newMovies)
    } catch (e) {
      throw new Error(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { resultsMovies, getMovies, loading }
}
