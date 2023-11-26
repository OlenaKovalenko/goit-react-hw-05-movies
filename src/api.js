import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '22b424da6b6918c86f924199d993847b';

export const fetchTrendingList = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
}  



export const fetchMoviesBySearch = async query => {
  const response = await axios.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
  const { results } = response.data;
  return results;
} 

export const fetchMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
} 

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  const { cast } = response.data;
  return cast;
} 