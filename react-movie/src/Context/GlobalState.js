import {
  createContext,
  useState,
  useDebounce,
  useEffect,
  useReducer,
} from "react";
import { Reducer } from "./Reducer.js";
import {
  ADD_MOVIE_TO_WATCHED,
  ADD_MOVIE_TO_WATCHLIST,
} from "../Components/types.js";
import { type } from "@testing-library/user-event/dist/type/index.js";

export const MovieContext = createContext(null);

const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

function GlobalState({ children }) {
  const [searchMovieParam, setSearchMovieParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieSearchResults, setMovieSearchResults] = useState([]);

  const [state, dispatch] = useReducer(Reducer, initialState);

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

  function handleAddToWatchlist(movie) {
    dispatch({
      type: ADD_MOVIE_TO_WATCHLIST,
      payload: movie,
    });
  }

  function handleAddToWatched(movie) {
    dispatch({
      type: ADD_MOVIE_TO_WATCHED,
      payload: movie,
    });
  }

  console.log(state);

  return (
    <MovieContext.Provider
      value={{
        searchMovieParam,
        setSearchMovieParam,
        loading,
        movieSearchResults,
        handleAddToWatched,
        handleAddToWatchlist,
        state,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default GlobalState;
