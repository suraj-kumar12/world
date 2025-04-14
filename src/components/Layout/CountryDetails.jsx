import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../../UI/Loader";
// import { getCountryIndData } from "../../api/postApi";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) return <Loader />;
  console.log(params);
  return (
    <section className="cards country-details-card container">
      <div className="container-card">
        {country && (
          <div className="conutry-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{country.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Region:</span>
                  {country.region}
                </p>

                <p>
                  <span className="card-description">Sub Region:</span>
                  {country.subregion}
                </p>

                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">TLD:</span>
                  {country.tld[0]}
                </p>

                <p>
                  <span className="card-description">NativeNames:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(",")}
                </p>

                <p>
                  <span className="card-description">Currencies:</span>
                  {Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name)
                    .join(",")}
                </p>

                <p>
                  <span className="card-description">Language:</span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(",")}
                </p>

                <p>
                  <span className="card-description">Population:</span>
                  {country.population.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="country-card-backBtn">
          <NavLink to="/country">
            <button className="btn-content">Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
