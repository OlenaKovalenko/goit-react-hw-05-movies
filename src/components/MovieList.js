
export const MovieList = ({items}) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}
