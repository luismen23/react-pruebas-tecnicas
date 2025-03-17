// import Movies from './components/Movies'
// import NavBar from './components/NavBar'
import { useState } from 'react'
import { Search } from './mocks/results.json'

function App() {
  const mappedMovies = Search.map(movie => ({
    title: movie.Title,
    year: movie.year,
    id: movie.imdbID,
    type: movie.Type,
    poster: movie.Poster,
  }))

  const [search, setSearch] = useState('')

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)

    if (search === '') return
  }

  return (
    <div className='relative flex flex-col flex-wrap' data-theme='night'>
      {/* NavBar */}
      <div className='navbar bg-base-300 shadow-sm'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-[1rem] sm:text-xl'>Toku TV</a>
        </div>
        <form onSubmit={handleSubmit} className='flex gap-2'>
          <input
            type='text'
            name='query'
            value={search}
            onChange={handleChange}
            placeholder='Search movie'
            className='input input-bordered w-32 md:w-[30rem]'
          />
          <button className='btn btn-soft btn-primary w-[4.2rem] sm:w-24'>
            Search
          </button>
        </form>
      </div>
      {/* <Movies /> */}
    </div>
  )
}

export default App
