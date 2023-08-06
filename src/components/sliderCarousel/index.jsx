// import React, { useState } from "react";
// import './style.css';
// import { images } from "../../json/index";
// const Slider = () => {
//   const [currentMovie, setCurrentMovie] = useState(0);

//   const goToPreviousMovie = () => {
    
//     const newMoviePlaying = (currentMovie - 1 + images.length) % images.length;
//     setCurrentMovie(newMoviePlaying);
//   };

//   const goToNextMovie= () => {
   
//     const newMoviePlaying = (currentMovie + 1) % images.length;
//     setCurrentMovie(newMoviePlaying);
//   };

//   return (
//     <>
//       <div className="carousel">
//         <div className="carouselInner" style={{ backgroundImage: `url(${images[currentMovie].img})` }}>
//           <div className="left" onClick={goToPreviousMovie}>
//           <i class="bi bi-caret-left-fill"></i>
         
//           </div>

//           <div className="center">
//             <p>{images[currentMovie].duration}</p>
//             <h1 className="center-h1">{images[currentMovie].title}</h1>
//             <p className="center-status">
         
//               <span>
//                  {images[currentMovie].status}
//               </span>
//               </p>

//             <p className="center-rating">
//               <span>
//               <i class="bi bi-star-fill"></i>
           
//               </span>
//               {images[currentMovie].rating}
//             </p>

//             <p className="center-description">
//               <span>
//                  {images[currentMovie].description}
//               </span>
//             </p>

//             <p className="center-staring">
//               <span>Staring:   </span>
//               {images[currentMovie].staring}
//             </p>

//            <div className="center-buttons">
//             <button className="watch">Watch Now</button>
//             <button className="favorite">Add To Favorite</button>
//            </div>
//           </div>

//           <div className="right" onClick={goToNextMovie}>
//           <i class="bi bi-caret-right-fill"></i>
          
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { Link } from "react-router-dom";
import { upcomingMovies, } from '../../utils/utilities';



const MovieSlider = () => { 
  const [comingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);  useEffect(() => {
    (async () => {
      const movies = await upcomingMovies();
      console.log({ movies });
      setLoading(false);
      setUpcomingMovies(movies.results);
    })();
  }, []);  if (loading) {
    return <h1>Loading movies...</h1>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };  const limit = 20;
  const slicedMovies = comingMovies.slice(15, limit);  return (
    <div className="slider-container">
      <Slider {...settings} className="container">
        {slicedMovies.length > 0 ? (
          slicedMovies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="image-link">
              <div key={movie.id} className="image-containers" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path})` }}>
                <div className="movie-info-overlay">
                  <h3>{movie.title}</h3>
                  <p className='overview'>{movie.overview}</p>
                  <span>{movie.rating}</span>
                  <div className="buttons-container">
                    <button className="watch-now-button">Watch Now</button>
                    <button className="add-to-favorites-button">Add to Favorites</button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h1>No movies found</h1>
        )}
      </Slider>
    </div>
  );
};const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <button className="custom-arrow prev-arrow" onClick={onClick}>&#10094;</button>;
};const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <button className="custom-arrow next-arrow" onClick={onClick}>&#10095;</button>;
};export default MovieSlider;