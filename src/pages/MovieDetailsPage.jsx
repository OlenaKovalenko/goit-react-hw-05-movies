import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "api";
import { SelectedMovieDetails } from "components/SelectedMovieDetails/SelectedMovieDetails";
import toast from "react-hot-toast";
import { Loader } from "components/Loader";
import { AddInfo, StyledLink } from "./MovieDetailsPage.styled";
import { WrapLink } from "components/Reviews/Reviews.styled";

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
      {isLoading && <Loader/>}
      <Link to={backLinkRef.current.state?.from ?? '/'}>
        <b>◄ Go back ◄</b>
      </Link>
      {selectedMovie && (<SelectedMovieDetails movie={selectedMovie} />)
        }
      <AddInfo>Additional infomation</AddInfo>
      <WrapLink>
        <li>
          <StyledLink to="cast">Cast</StyledLink>

        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </WrapLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense> 
    </div>
  )
}

export default MovieDetails;