import { ContainerMovie, Genres } from "./SelectedMovieDetails.styled"

export const SelectedMovieDetails = ({movie:{poster_path, title, release_date, vote_average, overview, genres}}) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  
  
  return (
    <ContainerMovie>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg } alt={title} width={400}/>
        <div>
          <h1>{`${title}(${release_date.split("-")[0]})`}</h1>
          <h4>{`User Store: ${Math.round(vote_average * 10)}%`}</h4>
        <h2>Owerview</h2>
        <p>{overview}</p> 
        <h3>Genres</h3>
        <Genres>{genres.map(genre => (<span>{genre.name}</span>)) }</Genres>

        </div>
    </ContainerMovie>
  )
}
