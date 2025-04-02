import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ sort }) {
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

  //evitamos que se calcule o ejecute la logica del sort cada vez que escribamos en el input,
  //guardano o memoizando el resultado de sort y dependiendo del sort y los resultados.
  const sortedMovies = useMemo(() => {
    return sort
      ? [...resultsMovies].sort((a, b) => a.title.localeCompare(b.title))
      : resultsMovies
  }, [sort, resultsMovies])

  return { resultsMovies: sortedMovies, getMovies, loading }
}
