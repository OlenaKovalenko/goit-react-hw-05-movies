import { Link, useLocation } from "react-router-dom"
import { Title, WrapInfo, WrapMovie } from "./MovieList.styled";

export const MovieList = ({ items }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const location = useLocation()
    
    return (
        <WrapMovie>
            {items.map(({poster_path, name, title, id}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{from: location}}>{
                        <WrapInfo>
                            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg} alt={name || title} width={250} height={375}/>
                            <Title>{ name || title}</Title>
                        </WrapInfo>
                        }
                    </Link>
                </li> 
            ))}
        </WrapMovie>
    )
}
