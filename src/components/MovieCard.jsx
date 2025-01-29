export default function MovieCard({moviesList})
{
   console.log(moviesList.poster_path);
   
    
    return(
        <div className="movie-card">
            <img src={moviesList.poster_path? `https://image.tmdb.org/t/p/w500/${moviesList.poster_path}` : `no-movie.png`} alt="Movie Poster" className="h-auto w-full"/>
            <div>
                <h3>{moviesList.title}</h3>
                <div className=" flex gap-1 mt-3 justify-center">
                    <div className="flex gap-2 items-center justify-evenly">
                        <img src="star.svg" alt="starIcon" />
                        <p className="text-white">{moviesList.vote_average.toFixed(1)}</p>
                        <span className="text-white">.</span>
                        <p className="capitalize text-gray-100">{moviesList.original_language}</p>
                        <span className="text-white">.</span>
                        <p className="text-gray-100">{moviesList.release_date.split('-')[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}