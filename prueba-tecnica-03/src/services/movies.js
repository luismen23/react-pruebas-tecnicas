/* eslint-disable no-undef */

const API_KEY = '23da9034'
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=avenger`

export async function searchMovies() {
  try {
    const response = await fetch(API_URL)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    }))
  } catch (e) {
    throw new Error(e)
  }
}
