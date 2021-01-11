import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const CitySearch = ({ handleSearch, search = "" }) => {
  const [city, setCity] = useState(search);
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const attr = [...e.currentTarget].reduce((acc, cur) => {
      const { name, value } = cur;
      return { ...acc, [name]: value };
    }, {});
    handleSearch(attr.city);
    input.current.focus();
  };

  const handleChange = (e) => {
    const city = e.target.value;
    setCity(city);
  };
  return (
    <form onSubmit={handleSubmit} className="forecast-city-search-form">
      <input
        type="search"
        placeholder="Enter city ..."
        name="city"
        value={city}
        ref={input}
        onChange={handleChange}
        className="search-input"
      ></input>
      <button type="submit" className="search-bth">Search</button>
    </form>
  );
};

CitySearch.propTypes = {
  handleSearch: PropTypes.func,
  search: PropTypes.string,
};

export default CitySearch;
