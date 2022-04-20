const API_KEY = process.env.REACT_APP_API_KEY;

export const MOVIE_DB_URL = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg";

export const BASE_URL1 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;
export const BASE_URL2 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=2`;
export const BASE_URL3 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=3`;
export const BASE_URL4 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=4`;
export const BASE_URL5 = (category) => `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=5`;
export const SINGLE_MOVIE_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;