import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Slider from './components/sliderCarousel';
import MovieList from './components/Movies';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <MovieList/>

      <Footer/>
    </div>
  );
}

export default App;
