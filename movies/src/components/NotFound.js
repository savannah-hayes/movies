import React from "react";

import BackButton from "./BackButton";

import { NotFoundContainer } from "styles";

const NotFound = () => {

  return (
    <NotFoundContainer>
      <BackButton />
      <h2>Movie Not Found...</h2>
    </NotFoundContainer>
  )
};

export default NotFound;