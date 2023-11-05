import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//9530329b
const API_URL = "http://omdbapi.com?apikey=9530329b";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
//Video linke: https://www.youtube.com/watch?v=b9eMGE7QtTk

/*
// Use of one function in another:

import "./App.css";

function Person(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h1>LastName: {props.lastName}</h1>
      <h1>Age: {props.Age} </h1>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <Person name={"waris"} lastName={"sherzad"} Age={"30"} />
      <Person />
      <Person />
    </div>
  );
};

export default App;
*/

/*
// Counter Application, Using Hook and UseState.
import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setcounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setcounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
*/
