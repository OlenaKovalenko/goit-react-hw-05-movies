import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { fetchMoviesBySearch } from "api";
import { FormSearch } from "components/FormSearch/FormSearch";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";
import { Loader } from "components/Loader";

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

      {query && isLoading && <Loader />}
      {query && (<MovieList items={movieItems} />)}

    </div>
  )
}

export default Movies;