import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "components/Footer";
import MovieList from "components/MovieList";
import MovieDetails from "components/MovieDetails";
import NotFound from "components/NotFound";

import { GlobalStyle } from "styles";

export const App = () => {  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to={"/404"} replace />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
