import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '22b424da6b6918c86f924199d993847b';

export const fetchTrendingList = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
}  
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmI0MjRkYTZiNjkxOGM4NmY5MjQxOTlkOTkzODQ3YiIsInN1YiI6IjY1NWU1NzdmMWRiYzg4MDBjNjg3YjdiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7JiqbArn44w22LWZzArm9OfmTh0GBCl_DykVvj7S4Tw'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/movie?query=1&include_adult=false&language=en-US&page=1&year=2023', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


export const fetchMoviesBySearch = async ({query}) => {
  const response = await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
} 