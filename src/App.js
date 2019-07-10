import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

// Components
import SearchBar from "./components/layout/SearchBar";

const App = () => {
  useEffect(() => {
    // Inits materialize JS
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
    </>
  );
};

export default App;
