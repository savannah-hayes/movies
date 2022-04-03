import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContainer, MovieWrapper, MovieImage, MovieOverlay, MovieTitle } from "styles";

import { BASE_URL1, BASE_URL2, BASE_URL3, BASE_URL4, BASE_URL5 } from "utils/urls";
import Loading from "./Loading";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firstFetch = fetch(BASE_URL1);
    const secondFetch = fetch(BASE_URL2);
    const thirdFetch = fetch(BASE_URL3);
    const fourthFetch = fetch(BASE_URL4);
    const fifthFetch = fetch(BASE_URL5);

    Promise.all([firstFetch, secondFetch, thirdFetch, fourthFetch, fifthFetch])
      .then(responses => {
        const arrayOfResponses = responses.map(res => res.json());
        return Promise.all(arrayOfResponses);
      })
      .then(data => {
        setMovies(data[0].results
          .concat(data[1].results)
          .concat(data[2].results)
          .concat(data[3].results)
          .concat(data[4].results)
        )
      })
      .catch(error => console.error(error))
      .finally(setLoading(false))
  }, []);

  if(loading) {
    return <Loading />
  }

  return (
    <MovieContainer>
      {movies.map((movie) => (
        <MovieWrapper key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}
              alt="movie posters"
            ></MovieImage>
            <MovieOverlay>
              <MovieTitle>{movie.title}</MovieTitle>
              <p>Released {movie.release_date}</p>
            </MovieOverlay>
          </Link>
        </MovieWrapper>
      ))} 
    </MovieContainer>
  );
};

export default MovieList;
