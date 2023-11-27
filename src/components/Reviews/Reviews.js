import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchMovieReviews } from "api";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader";
import { LiReviews, WrapReviews } from "./Reviews.styled";

const Reviews = () => {
    const { movieId } = useParams();
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
        <div>
            {isLoading && <Loader/>}
            
            {reviewsMovie.length > 0 ? (reviewsMovie.map(({ author, content, id }) => (
                <WrapReviews>
                    <LiReviews key={id}>
                        <p><b>Author: </b>{author}</p>
                        <p>{ content}</p>
                    </LiReviews>
                </WrapReviews>
            ))) : (<b>We don't have any reviews for this movie.</b>)}
        </div>
  )
}

export default Reviews;
