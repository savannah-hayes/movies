import { KEY } from "../config";

const API_KEY = KEY || process.env.API_KEY;

export const BASE_URL1 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
export const BASE_URL2 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=2`
export const BASE_URL3 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=3`
export const BASE_URL4 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=4`
export const BASE_URL5 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=5`
export const SINGLE_MOVIE_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`