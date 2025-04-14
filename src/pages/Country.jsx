import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import { getCountryData } from "../api/postApi";
import Loader from "../UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  // search logic ...

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // ......filter logic.........

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // main logic.........

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <div className="country-section container">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Country;
