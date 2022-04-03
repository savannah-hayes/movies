import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SINGLE_MOVIE_URL } from "utils/urls";
import Loading from "./Loading";
import { 
  Poster, 
  MovieDetailsContainer, 
  MovieDetailsWrapper, 
  MovieDetail, 
  Rating, 
  MovieDescription, 
  BackButton,
  BackArrow,
  ButtonText
} from "styles";

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const onBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(error => console.error(error))
      .finally(setLoading(false))
  }, [movieId]);

  if (loading) {
    return <Loading />
  }

  return (
    <MovieDetailsContainer 
      url={movies.backdrop_path ? `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` : ""} 
    >
      <BackButton onClick={onBackButtonClick}>
        <BackArrow src="/images/arrow.png" alt="back arrow icon"></BackArrow>
        <ButtonText>Movies</ButtonText>
      </BackButton>
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
