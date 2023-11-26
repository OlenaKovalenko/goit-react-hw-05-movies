import { fetchMovieCast } from "api";
import { useEffect, useState } from "react";
// import { CastDetails } from "./CastDetails";

export const Cast = ({movieId}) => {
    const [castMovie, setCastMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    if (!movieId) return;

    async function getCast() {
        try {
            setIsLoading(true);
            const fetchedCast = await fetchMovieCast(movieId);
            console.log(fetchedCast);
            setCastMovie(fetchedCast);
        } catch (error) {
        } finally {
        setIsLoading(false);
        }
    }

    getCast();
    }, [movieId]);

    // const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (
        <div>
            {castMovie && castMovie.map(({ profile_path, name, character, id }) => (
                <ul>
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width={250} />
                        <p>{name}</p>
                        <p>{`Character: ${character}`}</p>
                    </li>
                </ul>
            ))}

        </div>
    )
}
