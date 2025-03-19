// import Movies from './components/Movies'
// import NavBar from './components/NavBar'
import { useEffect, useRef, useState } from 'react'
import Movies from './components/Movies'
// import useMovies from './hooks/useMovies'

function App() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(false)
  const isFirstInput = useRef(true)
  // const { getMovies } = useMovies()

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
    setSearch(event.target.value)
    setError(null)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      // if the user doenst have used the input, dont show the errors
      isFirstInput.current = search === ''
      return
    }

    // Form Validations
    if (search === '') {
      setError('No puedes buscar una pelicula sin escribir nada')
      return
    }

    if (search.length < 3) {
      setError('La busqueda tiene que ser mayor a 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  const handleSubmit = event => {
    event.preventDefault()
    // Obtaining form data value
    const { search } = Object.fromEntries(new window.FormData(event.target))

    console.log(search)

    // getMovies()
  }

  return (
    <div className='relative flex flex-col flex-wrap' data-theme='night'>
      {/* NavBar */}
      <div className='navbar bg-base-300 shadow-sm'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-[1rem] sm:text-xl' href='/'>
            Toku TV
          </a>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input
            type='text'
            name='search'
            value={search}
            ref={isFirstInput}
            onChange={handleChange}
            placeholder='Search movie'
            className='input input-bordered w-32 md:w-[30rem]'
          />
          <button className='btn btn-soft btn-primary w-[4.2rem] sm:w-24'>
            Search
          </button>
        </form>
      </div>

      {/* Validation Error */}
      {error && <p className='mx-auto text-red-700 p-3'>{error}</p>}

      {/* Movies */}
      {<Movies />}
    </div>
  )
}

export default App
