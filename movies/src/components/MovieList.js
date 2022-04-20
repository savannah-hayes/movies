import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "components/Header";
import { BASE_URL1, BASE_URL2, BASE_URL3, BASE_URL4, BASE_URL5 } from "utils/urls";
import Loading from "./Loading";

import { MovieContainer, MovieWrapper, MovieImage, MovieOverlay, MovieTitle } from "styles";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("now_playing");

  useEffect(() => {
    const firstFetch = fetch(BASE_URL1(category));
    const secondFetch = fetch(BASE_URL2(category));
    const thirdFetch = fetch(BASE_URL3(category));
    const fourthFetch = fetch(BASE_URL4(category));
    const fifthFetch = fetch(BASE_URL5(category));

    Promise.all([firstFetch, secondFetch, thirdFetch, fourthFetch, fifthFetch])
      .then(responses => {
        const arrayOfResponses = responses.map(res => res.json());
        return Promise.all(arrayOfResponses);
      })
      .then(data => {
        setMovies(
          data[0].results
          .concat(data[1].results)
          .concat(data[2].results)
          .concat(data[3].results)
          .concat(data[4].results)
        )
        setCategory(category)
      })
      .catch(error => console.error(error))
      .finally(setLoading(false))
  }, [category]);

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Header setCategory={setCategory} />
      <MovieContainer>
        {movies.map((movie) => (
          <MovieWrapper key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieImage
                src={movie?.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : ""}
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
    </>
  );
};

export default MovieList;
