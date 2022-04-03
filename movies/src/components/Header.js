import React, { useState } from "react";

import { StyledHeader, List, Categories, Heading } from "styles";

const navCategories = {
  "now_playing": "Now Playing",
  "popular": "Popular",
  "top_rated": "Top Rated",
  "upcoming": "Upcoming"
};

const Header = ({ setCategory }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <StyledHeader>
      <h2>Movie<Heading>Site</Heading></h2>
      <nav>
        <List>
          {Object.keys(navCategories).map((category, index) => (
            <Categories 
              key={category}
              active={index === isActive ? "active" : ""}
              onClick={() => {
                setCategory(category)
                setIsActive(index)
              }}
              >
              <li>
                {navCategories[category]}
              </li>
            </Categories>
          ))}
        </List>
      </nav>
    </StyledHeader>
  )
}

export default Header;