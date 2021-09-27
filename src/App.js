import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import Countries from "./components/countries/countries.component";
import Country from "./components/country/country.component";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<Country />}></Route>
    </Router>
  );
}

export default App;
