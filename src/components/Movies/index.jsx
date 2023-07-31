import React, { useState, useEffect } from "react";
import { getMovies, getCategories } from "../../utils/utilities";
import { Link } from "react-router-dom";
import "./style.css";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const MovieList = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchCategories();
  }, [selectedCategoryId]); 

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const fetchedMovies = await getMovies(selectedCategoryId);
      setMoviesList(fetchedMovies.results || []);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const fetchedCategories = await getCategories();
      setCategoriesList(fetchedCategories.genres || []);
    } catch (error) {
      console.error( error.message);
    }
  };

  if (isLoading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  return (
    <div>
      <div className="genreNavbar">
        {categoriesList.map((item) => (
          <div
            key={item.id}
            className={`genreNavItem ${item.id === selectedCategoryId ? "active" : ""}`}
            onClick={() => setSelectedCategoryId(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="imageContainer">
        {moviesList.length > 0 ? (
          moviesList.map((item) => (
            <Link to={`/MovieDetails/${item.id}`} key={item.id}>
              <div className="images">
                <img
                  src={`${IMAGE_BASE_URL}${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            </Link>
          ))
        ) : (
          <h3>No movies found for the selected categories.</h3>
          
        )}
      </div>
    </div>
  );
};

export default MovieList;
