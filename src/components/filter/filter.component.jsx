import React from "react";

import "./filter.styles.scss";

const Filter = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("select");

    select.addEventListener("option", (e) => {
      const value = e.target.value;

      const countryRegion = document.querySelectorAll(".region");
      console.log(countryRegion);

      countryRegion.forEach((value) => {
        if (value.innerText.toLowerCase().includes(value.toLowerCase())) {
          console.log(value);
        } else {
          console.log("teste");
        }
      });
    });
  });
  return (
    <section className="filter-section">
      <form className="form-control">
        <select name="select" id="select" className="select">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </section>
  );
};

export default Filter;
