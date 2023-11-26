import { NavLink } from "react-router-dom"
import { WrapMovie } from "./MovieList.styled";

export const MovieList = ({ items }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
    return (
        <WrapMovie>
            {items.map(({poster_path, title, id}) => (
                <li key={id}>
                    <NavLink to={`/movies/${id}`}>{
                        <>
                            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg} alt={title} width={250} />
                            <p>{ title}</p>
                        </>
                        }
                    </NavLink>
                </li>
            ))}
        </WrapMovie>
    )
}
