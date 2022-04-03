import React from "react";
import { useNavigate } from "react-router-dom";

import { MoviesButton, BackArrow, ButtonText } from "styles";

const BackButton = () => {
  const navigate = useNavigate();

  const onMoviesButtonClick = () => {
    navigate("/");
  };

  return (
    <MoviesButton onClick={onMoviesButtonClick}>
      <BackArrow src="/images/arrow.png" alt="back arrow icon"></BackArrow>
      <ButtonText>Movies</ButtonText>
    </MoviesButton>
  )
};

export default BackButton;