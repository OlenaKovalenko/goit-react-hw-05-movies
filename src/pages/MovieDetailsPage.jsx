import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { RevolvingDot } from "react-loader-spinner";
import { fetchMovieById } from "api";
import { SelectedMovieDetails } from "components/SelectedMovieDetails/SelectedMovieDetails";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import toast from "react-hot-toast";

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location);

  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function getMovie() {
      try {
        setIsLoading(true);
        const fetchedMovie = await fetchMovieById(movieId);
        setSelectedMovie(fetchedMovie);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try reloading this page! 🥹')

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
      <Link to={backLinkRef.current.state?.from ?? '/'}>
        <b>◄ Go back ◄</b>
      </Link>
      {selectedMovie && (<SelectedMovieDetails movie={selectedMovie} />)
        }
      <h5>Additional infomation</h5>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
          {/* <NavLink to="cast">cast</NavLink> */}

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