import React, { Component } from "react";

import AsyncSelect from 'react-select/async';
import { geoApiOptions, GEO_API_URL } from "../../api";

const loadOptions = (inputValue ) => {
    return fetch(
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

const promiseOptions = (inputValue) =>
  new Promise.all((resolve) => {
    setTimeout(() => {
      resolve(loadOptions(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component {
  render() {
    return (
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    );
  }
}

// export default class AsyncMulti extends Component<{}, State> {
//     state: State = { inputValue: '' };
//     handleInputChange = (newValue: string) => {
//       const inputValue = newValue.replace(/\W/g, '');
//       this.setState({ inputValue });
//       return inputValue;
//     };
//     render() {
//       return (
//         <AsyncSelect
//           isMulti
//           cacheOptions
//           defaultOptions
//           loadOptions={promiseOptions}
//         />
//       );
//     }
//   }
