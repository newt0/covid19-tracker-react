import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("countryCode is>>>", countryCode);
    
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <h1>Covid19 tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
          {/* <MenuItem value="worldwide">World Wide</MenuItem>
          <MenuItem value="worldwide">Option Two</MenuItem>
          <MenuItem value="worldwide">Option Three</MenuItem>
          <MenuItem value="worldwide">Test</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
