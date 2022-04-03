import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: white;
  }

  ul {
    list-style: none;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

export const Categories = styled.button`
  cursor: pointer;
  padding: 5px;
  margin-left: 5px;
  border-radius: 10px;
  font-weight: 700;
  color: ${props => props.active ? "white" : "#777"};
  background-color: ${props => props.active ? "#4F6CFF" : "none"};

  &:hover {
    color: black;
  }
`

export const Heading = styled.span`
  color: #4F6CFF;
`

export const List = styled.ul`
  display: flex;
`

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const MovieWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const MovieImage = styled.img`
  height: 600px;
  width: 100%;
  object-fit: cover;

  @media (orientation: landscape) {
    height: 800px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

export const MovieOverlay = styled.div`
  color: white;
  word-wrap: break-word;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,1));

   @media (min-width: 1024px) {
    opacity: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.60);
      opacity: 1;
    }
  }
`;

export const MovieTitle = styled.h1`
  margin: 0;
`;

export const Poster = styled.img`
  border: solid 5px white;
  width: 200px;
  display: none;

  @media (orientation: landscape) {
    width: 150px;
  }

  @media (min-width: 1024px) {
    display: block;
    width: 300px;
  }
`;

export const MovieDetailsContainer = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  border: solid black;
  background-position: 50% 50%;
  background-image: ${(props) => (props.url)};

  @media (min-width: 1024px) {
    padding: 50px;
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 0;

  @media (orientation: landscape) {
    flex-direction: row;
    align-items: flex-end;
  }

  @media (min-width: 1024px) {
    bottom: 50px;
  }
`;

export const MovieDetail = styled.div`
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1));
  padding: 8px;

  @media (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 320px;
    margin-left: 15px;
    width: 550px;
    height: auto;
    padding: 0 20px;
  }
`;

export const Rating = styled.span`
  color: red;
  font-size: 18px;
  margin-left: 10px;
  vertical-align: middle;
`;

export const MovieDescription = styled.p`
  font-size: 18px;
`;

export const MoviesButton = styled.button`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;
  background-color: transparent;
  filter: brightness(0) invert(1);
  -webkit-filter: brightness(0) invert(1);
  margin: 30px 0 0 20px;
`;
  
export const BackArrow = styled.img`
  transition: 0.3s ease-in-out;
  
  @media (min-width: 1024px) {
    &:hover {
      margin-right: 5px;
    }
  }
`
  
  export const ButtonText = styled.span`
  vertical-align: middle;
  font-weight: 700;
  font-size: 16px;
  transition: 0.3s ease-in-out;
  
  @media (min-width: 1024px) {
    &:hover {
      margin-left: 5px;
    }
  }
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`

export const LoadingMessage = styled.h2`
  text-align: center;
`

export const StyledFooter = styled.footer`
  text-align: center;
  padding: 30px 0;
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const MovieDbLogo = styled.img`
  margin-left: 10px;
  width: 125px;
`