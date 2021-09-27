import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./countries.styles.scss";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    //console.log(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const favoriteCountry = (numericCode) => {
    const addFavorite = countries.filter(
      (country) => country.numericCode === numericCode
    );

    //console.log(addFavorite);
    const favourites = [];

    const newfavourites = Object.assign(addFavorite, favourites);

    console.log(`Lista de favoritos:`, newfavourites);
  };

  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;

          return (
            <article key={numericCode}>
              <div>
                <img src={flag} alt={name} />
                <div className="country-details">
                  <h3 className="country-name">{name}</h3>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4 className="region">
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                  <div className="buttons">
                    <Link to={`/countries/${name}`} className="btn">
                      Learn More
                    </Link>
                    <button
                      className="btn"
                      onClick={() => favoriteCountry(numericCode)}
                    >
                      Add Favorites
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
