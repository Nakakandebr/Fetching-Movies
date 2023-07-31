import React, { useState } from "react";
import './style.css';

import { images } from "../json/index";
const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  const goToPreviousImage = () => {
    
    const newCurrImg = (currImg - 1 + images.length) % images.length;
    setCurrImg(newCurrImg);
  };

  const goToNextImage = () => {
   
    const newCurrImg = (currImg + 1) % images.length;
    setCurrImg(newCurrImg);
  };

  return (
    <>
      <div className="carousel">
        <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
          <div className="left" onClick={goToPreviousImage}>
          <i class="bi bi-caret-left-fill"></i>
         
          </div>

          <div className="center">
            <p>{images[currImg].duration}</p>
            <h1 className="center-h1">{images[currImg].title}</h1>
            <p className="center-status">
              <span>
                 {images[currImg].status}
              </span>
              </p>

            <p className="center-rating">
              <span>
              <i class="bi bi-star-fill"></i>
           
              </span>
              {images[currImg].rating}
            </p>

            <p className="center-description">
              <span>
                 {images[currImg].description}
              </span>
            </p>

            <p className="center-staring">
              <span>Staring:   </span>
              {images[currImg].staring}
            </p>

           <div className="center-buttons">
            <button className="watch">Watch Now</button>
            <button className="favorite">Add To Favorite</button>
           </div>
          </div>

          <div className="right" onClick={goToNextImage}>
          <i class="bi bi-caret-right-fill"></i>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;