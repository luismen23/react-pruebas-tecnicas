import debounce from 'just-debounce-it'
import { useCallback, useEffect, useRef, useState } from 'react'

export function useQuery({ getMovies }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies(search)
    }, 500),
    []
  )

  const handleChange = event => {
    const newSearch = event.target.value
    // Pre-validations
    if (newSearch.startsWith(' ')) {
      setError('No puedes comenzar con un espacio')
      return
    }

    if (newSearch.startsWith(Number(newSearch))) {
      setError('No puedes comenzar por un number')
      return
    }
    setQuery(newSearch)
    setError(null)
    debouncedGetMovies(newSearch)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      // if the user doenst have used the input, dont show the errors
      isFirstInput.current = query === ''
      return
    }

    // Form Validations
    if (query === '') {
      setError('No puedes buscar una pelicula sin escribir nada')
      return
    }

    if (query.length < 3) {
      setError('La busqueda tiene que ser mayor a 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return { query, error, isFirstInput, handleChange }
}
