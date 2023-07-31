import React, { useState } from "react";
import './style.css';
import { images } from "../../json/index";
const Slider = () => {
  const [currentMovie, setCurrentMovie] = useState(0);

  const goToPreviousMovie = () => {
    
    const newMoviePlaying = (currentMovie - 1 + images.length) % images.length;
    setCurrentMovie(newMoviePlaying);
  };

  const goToNextMovie= () => {
   
    const newMoviePlaying = (currentMovie + 1) % images.length;
    setCurrentMovie(newMoviePlaying);
  };

  return (
    <>
      <div className="carousel">
        <div className="carouselInner" style={{ backgroundImage: `url(${images[currentMovie].img})` }}>
          <div className="left" onClick={goToPreviousMovie}>
          <i class="bi bi-caret-left-fill"></i>
         
          </div>

          <div className="center">
            <p>{images[currentMovie].duration}</p>
            <h1 className="center-h1">{images[currentMovie].title}</h1>
            <p className="center-status">
              <span>
                 {images[currentMovie].status}
              </span>
              </p>

            <p className="center-rating">
              <span>
              <i class="bi bi-star-fill"></i>
           
              </span>
              {images[currentMovie].rating}
            </p>

            <p className="center-description">
              <span>
                 {images[currentMovie].description}
              </span>
            </p>

            <p className="center-staring">
              <span>Staring:   </span>
              {images[currentMovie].staring}
            </p>

           <div className="center-buttons">
            <button className="watch">Watch Now</button>
            <button className="favorite">Add To Favorite</button>
           </div>
          </div>

          <div className="right" onClick={goToNextMovie}>
          <i class="bi bi-caret-right-fill"></i>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;