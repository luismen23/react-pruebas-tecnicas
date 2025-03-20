function ListOfMovies({ movies }) {
  return (
    <div className=' flex-col flex justify-center items-center gap-5 p-20 pt-10 md:flex-row md:flex-wrap'>
      {movies?.map(movie => {
        return (
          <div
            className='card card-side w-56 flex flex-col justify-center text-center items-center flex-wrap border border-amber-50'
            key={movie.id}
          >
            <h2 className='card-title w-full mx-auto h-24 p-4'>
              {movie.title}
            </h2>

            <figure>
              <img src={movie.poster} alt={movie.title} className='w-40 h-56' />
            </figure>

            <div className='card-body justify-center'>
              <p>Released in {movie.year}.</p>
              <div className='card-actions '>
                <button className='btn btn-primary'>Watch</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function NoMoviesResults() {
  return <p className='p-5'>No se encontraron películas para esta búsqueda</p>
}

function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
export default Movies
