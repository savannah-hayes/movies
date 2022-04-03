const API_KEY = 'c3172ec38bb05890b52b6288d18c7b8e';

export const BASE_URL1 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const BASE_URL2 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`
export const BASE_URL3 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`
export const BASE_URL4 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`
export const BASE_URL5 = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=5`
export const SINGLE_MOVIE_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`