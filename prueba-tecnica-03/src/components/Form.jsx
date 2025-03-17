import { useState } from 'react'
import { Search } from '../mocks/results.json'

function Form() {
  const mappedMovies = Search.map(movie => ({
    title: movie.Title,
    year: movie.year,
    id: movie.imdbID,
    type: movie.Type,
    poster: movie.Poster,
  }))
  const [search, setSearch] = useState('')
  //   const movies = Search.map((movie) => {})
  //   console.log(Search)

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (search === '') return
  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        type='text'
        value={search}
        onChange={handleChange}
        placeholder='Search movie'
        className='input input-bordered w-32 md:w-[30rem]'
      />
      <button className='btn btn-soft btn-primary w-[4.2rem] sm:w-24'>
        Search
      </button>
    </form>
  )
}

export default Form
