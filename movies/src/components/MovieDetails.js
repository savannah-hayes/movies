import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { SINGLE_MOVIE_URL } from "utils/urls";
import Loading from "./Loading";
import BackButton from "./BackButton";

import { 
  Poster, 
  MovieDetailsContainer, 
  MovieDetailsWrapper, 
  MovieDetail, 
  Rating, 
  MovieDescription
} from "styles";

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SINGLE_MOVIE_URL(movieId));
      const json = await response.json();
      setMovies(json);
    };

    setLoading(false);
    fetchData()
    .catch(error => console.error(error))
  }, [movieId]);

  if (loading) {
    return <Loading />
  }

  return (
    <MovieDetailsContainer 
      url={movies.backdrop_path ? `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` : ""} 
    >
      <BackButton />
      <MovieDetailsWrapper>
        <Poster
          key={movies.title}
          src={movies.poster_path ? `https://image.tmdb.org/t/p/w300${movies.poster_path}` : ""}
          alt="movie posters"
        ></Poster>
        <MovieDetail>
          <h1>
            {movies.title} <Rating>{movies.vote_average}/10</Rating>
          </h1>
          <MovieDescription>{movies.overview}</MovieDescription>
        </MovieDetail>
      </MovieDetailsWrapper>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
