import { RevolvingDot } from "react-loader-spinner";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { fetchMoviesBySearch } from "api";
import { FormSearch } from "components/FormSearch";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "components/MovieList";

const Movies = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    async function getSearchMovies() {
      try {
        setIsLoading(true);
        const searchMovies = await fetchMoviesBySearch(query);
        setMovieItems(searchMovies);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try reloading this page! 🥹')
      } finally {
        setIsLoading(false);
      }
    }

    getSearchMovies();
  }, [query]);

  return (
    <div>
      <FormSearch />

      {query && isLoading && (
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
      {query && (<MovieList items={movieItems} />)}

    </div>
  )
}

export default Movies;