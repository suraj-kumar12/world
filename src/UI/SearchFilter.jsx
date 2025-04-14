import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  // ...handleInputChange...........
  const handleInputChange = (event) => {
    setSearch(event.target.value);
    event.preventDefault();
  };

  //   ...........handleSelectChange.........
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
    event.preventDefault();
  };

  //   ..........sortCountries..........
  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  return (
    <section className="section-searchFilter container">
      <div className="input-btn">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button className="btn-content" onClick={() => sortCountries("asc")}>
          ASC
        </button>
      </div>

      <div>
        <button className="btn-content" onClick={() => sortCountries("des")}>
          DEC
        </button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
