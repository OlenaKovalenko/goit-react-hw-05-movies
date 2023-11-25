import { fetchTrendingList } from "api";
import { useEffect, useState } from "react";
import { RevolvingDot } from "react-loader-spinner";
import { MovieList } from "components/MovieList";

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
        console.log(initialMovies);
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
      {isLoading && (
        <RevolvingDot
          radius="45"
          strokeWidth="5"
          color="red"
          secondaryColor='blue'
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {error && (
        <b>Oops! Something went wrong! Please try reloading this page! 🥹</b>
      )}
      {/* {movieItems.lenght > 0 && (<MovieList items={movieItems} />)} */}
      <MovieList items={movieItems} />


    </div>
  )
}

export default Home;
