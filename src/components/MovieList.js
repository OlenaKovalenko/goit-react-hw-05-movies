import { NavLink } from "react-router-dom"

export const MovieList = ({items}) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <NavLink to={`/movies/${item.id}`}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
    )
}
