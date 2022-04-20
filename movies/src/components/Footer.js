import React from "react";

import { MOVIE_DB_URL } from "utils/urls";

import { StyledFooter, MovieDbLogo } from "styles";

const Footer = () => {
  return (
    <StyledFooter>
      All film-related metadata used in this project is supplied by The Movie Database (TMDb).
      <MovieDbLogo 
        src={MOVIE_DB_URL}
        alt="moviedb logo" 
      >
      </MovieDbLogo>
    </StyledFooter>
  )
};

export default Footer;