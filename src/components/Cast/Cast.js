import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMovieCast } from "api";
import { Loader } from "components/Loader";
import { WrapCast } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [castMovie, setCastMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    if (!movieId) return;

    async function getCast() {
        try {
            setIsLoading(true);
            const fetchedCast = await fetchMovieCast(movieId);
            setCastMovie(fetchedCast);
        } catch (error) {
            toast.error('Oops! Something went wrong! Please try reloading this page! 🥹')
        } finally {
        setIsLoading(false);
        }
    }

    getCast();
    }, [movieId]);

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
        <div>
            {isLoading && <Loader/>}
            
            {castMovie.length>0 ? (castMovie.map(({ profile_path, name, character, id }) => (
                <WrapCast>
                    <li key={id}>
                        <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg } alt={name} width={250}
                        />
                        <p>{name}</p>
                        <p>{`Character: ${character}`}</p>
                    </li>
                </WrapCast>
            ))) : (<b>We don't have any information about the actors.</b>)}

        </div>
    )
}

export default Cast;
