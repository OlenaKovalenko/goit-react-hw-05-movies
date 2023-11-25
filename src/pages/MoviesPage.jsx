import { RevolvingDot } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { fetchMoviesBySearch } from "api";
import { FormSearch } from "components/Form";

const Movies = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getSearchMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const searchMovies = await fetchMoviesBySearch();
        setMovieItems(searchMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }


    getSearchMovies();
  }, []);

  return (
    <div>
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
      <FormSearch />
    </div>
  )
}

export default Movies;