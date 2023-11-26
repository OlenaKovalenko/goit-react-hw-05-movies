import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RevolvingDot } from "react-loader-spinner";
import { fetchMovieReviews } from "api";

export const Reviews = ({movieId}) => {
    const [reviewsMovie, setReviewsMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    if (!movieId) return;

        async function getReviews() {
        try {
            setIsLoading(true);
            const fetchedReviews = await fetchMovieReviews(movieId);
            setReviewsMovie(fetchedReviews);
        } catch (error) {
            toast.error('Oops! Something went wrong! Please try reloading this page! 🥹')
        } finally {
        setIsLoading(false);
        }
    }

    getReviews();
    }, [movieId]);

    return (
        <div>Reviews
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
            {reviewsMovie ? (reviewsMovie.map(({ author, content, id }) => (
                <ul>
                    <li key={id}>
                        <p>{`Author: ${author}`}</p>
                        <p>{ content}</p>
                    </li>
                </ul>
            ))) : (<div>We don't have any reviews for this movie.</div>)}
        </div>
  )
}
