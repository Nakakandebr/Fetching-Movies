import React, { useState } from "react";
import "./style.css";
import { searchMovies } from "../../utils/utilities";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleInput = async (event) => {
    setSearchValue(event.target.value);
    const response= await searchMovies(event.target.value);
    setSearchResults(response.results || []);
    setSelectedMovie(null);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setSearchValue(movie.title);
    setSearchResults([]);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <h1 className="logo">M<span>oo</span>vie</h1>
        <div className="search-container">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search  your choices of Movies..."
            className="search-input"
          />
          <button className="search-button">

            
            {searchResults.length > 0 && (
              <div className="search-dropdown">
                <ul className="movie-dropdown">
                  {searchResults.map((item) => (
                    <li
                      key={item.id}
                      className="search-result"
                      onClick={() => handleSelectMovie(item)}>
                    
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>
        <ul className="links">
          <li className="link">Home</li>
          <li className="link">My List</li>
          <li className="link">
            <button className="sign-in-button">Sign in</button>
          </li>
        </ul>
      </nav>
      {selectedMovie && (
        <div className="selected-movie">
          <h2>{selectedMovie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
