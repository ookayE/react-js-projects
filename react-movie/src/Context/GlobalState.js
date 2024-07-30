import { createContext, useState, useDebounce, useEffect } from "react";

export const MovieContext = createContext(null);

function GlobalState({ children }) {
  const [searchMovieParam, setSearchMovieParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieSearchResults, setMovieSearchResults] = useState([]);

  async function fetchListOfMovies(query) {
    try {
      setLoading(true);
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data && data.Search && data.Search.length > 0) {
        setMovieSearchResults(data.Search);
        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      fetchListOfMovies(searchMovieParam);
    } catch (error) {
      console.log(error);
    }
  }, [searchMovieParam]);

  return (
    <MovieContext.Provider
      value={{
        searchMovieParam,
        setSearchMovieParam,
        loading,
        movieSearchResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default GlobalState;
