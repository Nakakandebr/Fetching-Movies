import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Carousel from './sliderCarousel';
import MovieList from './components/Movies';
function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default App;
