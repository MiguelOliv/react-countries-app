import React from "react";
import Search from "../search/search.component";
import Filter from "../filter/filter.component";

import "./header.styles.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1>Search in the world?</h1>
      </div>
      <div className="search-container">
        <div>
          <Search />
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </header>
  );
};

export default Header;
