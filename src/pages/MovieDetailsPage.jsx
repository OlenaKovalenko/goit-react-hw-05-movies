import { fetchMovieById } from "api";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getMovie() {
      try {
        setIsLoading(true);
        const fetchedMovie = await fetchMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    if (typeof movieId !== 'undefined') {
      getMovie();
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && <b>LOADING QUIZ...</b>}
      <Link to={backLinkRef.current.state?.from ?? '/'}>
        <b> Go back</b>
      </Link>
      {movie && <h1>{movie.title}</h1>}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default MovieDetails;