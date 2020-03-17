import React, { useState } from "react";
import "./App.css";
import { CountryDetail } from "./components/CountryDetail";
import axios from "axios";

const App = props => {
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  const getCoutry = async number => {
    const url = `https://raw.githubusercontent.com/mledoze/countries/master/countries`;
    const response = await axios.get(url);
    const { data } = response;
    return {
      flag: data.flag,
      name: data.name
    };
  };

  const [country, clickedCountry] = useState(false);

  return (
    <div className="App">
      <div>
        {
          <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">
                  WikiCountries
                </a>
              </div>
            </nav>
            <div className="container">
              <div className="row">
                <div
                  className="col-5"
                  style={{ maxHeight: "90vh", overflow: "scroll" }}
                >
                  <div className="list-group">
                    <a
                      className="list-group-item list-group-item-action"
                      href="/ABW"
                      value={country[0]}
                      onChange={event => clickedCountry[1]()}
                    >
                      <span>🇦🇼</span> Aruba
                    </a>
                    <a
                      className="list-group-item list-group-item-action"
                      href="/AFG"
                    >
                      <span>🇦🇫</span> Afghanistan
                    </a>
                  </div>
                </div>
                <CountryDetail />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default App;
