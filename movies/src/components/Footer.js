import React from "react";

import { StyledFooter, MovieDbLogo } from "styles"

const Footer = () => {
  return (
    <StyledFooter>
      All film-related metadata used in this project is supplied by The Movie Database (TMDb).
      <MovieDbLogo 
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        alt="moviedb logo" 
      >
      </MovieDbLogo>
    </StyledFooter>
  )
};

export default Footer;