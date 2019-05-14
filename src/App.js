import React from "react";
import "./App.css";
import Toggler from "./Toggler";
import SimpleForm from "./SimpleForm";
import ClickerEffect from "./ClickerEffect";
import StarWarsAPI from './StarWarsAPI'

function App() {
  return (
    <div className="App">
      <ClickerEffect />
      <Toggler />
      <SimpleForm />
      <StarWarsAPI />
    </div>
  );
}

export default App;
