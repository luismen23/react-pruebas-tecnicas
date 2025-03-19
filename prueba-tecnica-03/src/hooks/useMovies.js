// import { useState } from 'react'
// import { searchMovies } from '../services/movies'

function useMovies() {
  // const [resultsMovies, setResultsMovies] = useState([])

  try {
    // const getMovies = async () => {
    //   const result = await searchMovies()
    //   setResultsMovies(result)
    //   console.log(result)
    // }
    // const movies = resultsMovies.Search
    // const mappedMovies = movies?.map(movie => ({
    //   title: movie.Title,
    //   year: movie.Year,
    //   id: movie.imdbID,
    //   type: movie.Type,
    //   poster: movie.Poster,
    // }))
    // return { resultsMovies, getMovies }
  } catch (e) {
    throw new Error(e)
  }
}

export default useMovies
