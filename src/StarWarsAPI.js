import React, { useState, useEffect } from "react";
import axios from "axios";
import useToggle from "./hooks/useToggle";

function StarWarsAPI() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  const [isLoading, toggleIsLoading] = useToggle(true);

  useEffect(() => {
    async function getData() {
      const api = `https://swapi.co/api/films/${number}/`;
      const response = await axios.get(api);
      console.log(response.data);
      setMovie(response.data);
      toggleIsLoading(!isLoading);
    }
    getData();
  }, [number]); //getData() only run when number is changed. Why we can a warning here?

  const handleSelectChange = e => {
    setNumber(e.target.value);
    toggleIsLoading(!isLoading);
  };
  return (
    <div>
      <h1>Fetch data from StarWars API</h1>
      <select value={number} onChange={handleSelectChange}>
        <option value="1">Episode 1</option>
        <option value="2">Episode 2</option>
        <option value="3">Episode 3</option>
        <option value="4">Episode 4</option>
        <option value="5">Episode 5</option>
        <option value="6">Episode 6</option>
        <option value="7">Episode 7</option>
      </select>
      <h4>{isLoading ? "Loading..." : ""}</h4>
      {isLoading ? (
        <div />
      ) : (
        <div>
          <p>{movie.title}</p>
          <p>{movie.opening_crawl}</p>
        </div>
      )}
    </div>
  );
}

export default StarWarsAPI;
