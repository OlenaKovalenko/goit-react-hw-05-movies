import { fetchTrendingList } from "api";
import { useEffect, useState } from "react";
import { MovieList } from "components/MovieList";
import { Loader } from "components/Loader";

const Home = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendingList() {
      try {
        setIsLoading(true);
        setError(false);
        const initialMovies = await fetchTrendingList();
        setMovieItems(initialMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }


    getTrendingList();
  }, []);


  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader/>}
      {error && (
        <b>Oops! Something went wrong! Please try reloading this page! 🥹</b>
      )}
      {movieItems.length > 0 && (<MovieList items={movieItems} />)}
      {/* <MovieList items={movieItems} /> */}


    </div>
  )
}

export default Home;
