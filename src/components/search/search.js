import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue = "Kotsiubynske") => {
    return fetch(
      // `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      // countries/UA/regions/${inputValue}/cities?
      // `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      `${GEO_API_URL}/cities?countryIds=UA&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data)
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      className={"border py-2 px-3 text-grey-darkest w-1/2 mt-4"}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
