import React from "react";
import { useNavigate } from "react-router-dom";

import { NotFoundContainer, NotFoundPage } from "styles";

const NotFound = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundPage>Movie Not Found</NotFoundPage>
      <button onClick={onHomeButtonClick}>Return to Home Page</button>
    </NotFoundContainer>
  )
};

export default NotFound;