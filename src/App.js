import React from "react";
import "./App.css";
import Toggler from "./Toggler";
import SimpleForm from "./SimpleForm";
import ClickerEffect from "./ClickerEffect";

function App() {
  return (
    <div className="App">
      <ClickerEffect />
      <Toggler />
      <SimpleForm />
    </div>
  );
}

export default App;
