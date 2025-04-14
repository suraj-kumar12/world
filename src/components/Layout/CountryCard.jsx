import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { name, population, region, capital, flags } = country;
  return (
    <li className="country-card card">
      <div className="container-card">
        <img src={flags.svg} alt={flags.alt} />
        <div className="countryInfo">
          <p className="card-title"> {name.common}</p>
          <p>
            <span className="card-description">Region:</span>
            {region}
          </p>

          <p>
            <span className="card-description">Capital:</span>
            {capital[0]}
          </p>

          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button className="btn-content" style={{ marginTop: "20px" }}>
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
