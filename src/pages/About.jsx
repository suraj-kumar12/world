import React from "react";
import countryFacts from "../api/countryDataApi.json";

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Intresting Facts <br /> We,re Proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, intrestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>

                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>

                <p>
                  <span className="card-description">Intresting Facts:</span>
                  {intrestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
