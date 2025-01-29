import { useState, useEffect } from 'react'
import Header from './sections/Header'
import Trending from './sections/Trending'
import MovieLists from './sections/MovieLists';

const API_BASE_URL= 'https://api.themoviedb.org/3';
const API_KEY= import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS={
  
  method: 'GET',
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {

  const [errorMsg, setErrorMsg]=useState('');
  const [movieList, setMovieList]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

  const fetchMovies= async()=>{
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;

        const response= await fetch(endpoint, API_OPTIONS);

        if(!response.ok){
          throw new error('Failed to Fetch the Movies')
        }

        const data=await response.json();

      if(data.response=== 'False')
      {
        setErrorMsg(data.error || "Failed to Fetch Movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results)

    } catch (error) {
      console.log(`error : ${error}`)
      setErrorMsg("Error Fetching Movies, Please Try Again")
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  

  return (
    <>
      <main>
        <div className='pattern'>
        <section className='container'>
          <Header />
          <Trending/>
          
          {isLoading ? (
            <p className='text-white'>Loading..</p>
          ) : errorMsg ? (
            <p className='text-white'>error</p>
          ):(
            <MovieLists movies={movieList}/>
          )
        
        }
        </section>
        </div>
      </main>
    </>
  )
}

export default App
