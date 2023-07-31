const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3/genre/movie/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },

    });
    const result = await response.json();
    return result;
  } catch (error) {

    return error.message;

  }
};

export const getMovies = async (genreId) => {
  try {
    let url = `${BASE_URL}/3/movie/popular`;
    if (genreId) {
      url = `${BASE_URL}/3/discover/movie?with_genres=${genreId}`;
    }
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'

        
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {

    return error.message;
    

  }
};


const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/search/movie?query=${query}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export { searchMovies };
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
