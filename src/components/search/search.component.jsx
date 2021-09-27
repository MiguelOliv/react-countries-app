import React from "react";

import "./search.styles.scss";

const Search = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");

    search.addEventListener("input", (e) => {
      const value = e.target.value;

      const countryName = document.querySelectorAll(".country-name");

      countryName.forEach((name) => {
        if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
          name.parentElement.parentElement.style.display = "block";
        } else {
          name.parentElement.parentElement.style.display = "none";
        }
      });

      //console.log(value);
    });
  });

  return (
    <section className="search-section">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search for country"
        />
      </form>
    </section>
  );
};

export default Search;
