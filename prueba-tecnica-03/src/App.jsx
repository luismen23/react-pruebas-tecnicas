// import NavBar from './components/NavBar'
import { useState } from 'react'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'

function App() {
  const [sort, setSort] = useState(false)
  const { getMovies, resultsMovies, loading } = useMovies({ sort })
  const { query, error, isFirstInput, handleChange } = useQuery({
    getMovies,
    sort,
  })

  const handleSubmit = event => {
    event.preventDefault()
    // Obtaining form data value
    const { search } = Object.fromEntries(new window.FormData(event.target))

    getMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='relative flex flex-col flex-wrap justify-center items-center'>
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
            value={query}
            ref={isFirstInput}
            onChange={handleChange}
            placeholder='Search movie'
            className='input input-bordered w-32 md:w-[30rem]'
          />
          <div className='flex justify-center items-center text-center gap-1'>
            <label htmlFor='sortMovies' className='text-xs'>
              Sort Movies
            </label>
            <input
              type='checkbox'
              name='sortMovies'
              checked={sort}
              onChange={handleSort}
            />
          </div>
          <button className='btn btn-soft btn-primary w-[4.2rem] sm:w-24'>
            Search
          </button>
        </form>
      </div>

      {/* Validation Error */}
      {error && <p className='mx-auto text-red-700 p-3'>{error}</p>}

      {/* Movies */}
      {loading ? <p>Cargando ...</p> : <Movies movies={resultsMovies} />}
    </div>
  )
}

export default App
