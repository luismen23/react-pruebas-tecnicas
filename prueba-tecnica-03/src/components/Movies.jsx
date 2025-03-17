import { Search } from '../mocks/results.json'

function Movies({ movieSearch }) {
  const mappedMovies = Search.map(movie => ({
    title: movie.Title,
    year: movie.year,
    id: movie.imdbID,
    type: movie.Type,
    poster: movie.Poster,
  }))

  return (
    <div className='max-w-[40rem] mx-auto flex flex-col gap-5 p-10 '>
      {mappedMovies.map(movie => {
        return (
          <div key={movie.imdbID}>
            <div className='card card-side card-xs md:card-md bg-base-300 shadow-sm'>
              <figure>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className='w-[10rem] h-[15rem]'
                />
              </figure>
              <div className='card-body justify-around'>
                <h2 className='card-title'>{movie.title}</h2>
                <div className='flex flex-col gap-2'>
                  <span>Year: {movie.year}</span>
                  <span>Type: {movie.type}</span>
                </div>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>Watch</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Movies
