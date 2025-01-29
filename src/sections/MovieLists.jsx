import MovieCard from "../components/MovieCard"

export default function MovieLists({movies})
{ 
    return(
        <section className="movies-list-container">
            <h2>Top Rated Movies</h2>

            <ul className="movie-lists">
                {movies.map((item)=>
                {
                  return(
                    <li key={item.id}>
                        <MovieCard moviesList={item}/>
                    </li>
                  )
                })}
            </ul>
        </section>
    )
}