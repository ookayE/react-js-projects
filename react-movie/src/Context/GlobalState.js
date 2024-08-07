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
  REMOVE_MOVIE_FROM_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHED,
  MOVE_MOVIE_TO_WATCHED,
} from "../Components/types.js";

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

  //set watchlist and watched to local storage
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

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

  function handleRemoveFromWatchList(id) {
    dispatch({
      type: REMOVE_MOVIE_FROM_WATCHLIST,
      payload: id,
    });
  }

  function handleRemoveFromWatched(id) {
    dispatch({
      type: REMOVE_MOVIE_FROM_WATCHED,
      payload: id,
    });
  }

  function handleMoveMovieToWatched(movie) {
    dispatch({
      type: MOVE_MOVIE_TO_WATCHED,
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
        handleRemoveFromWatchList,
        handleRemoveFromWatched,
        handleMoveMovieToWatched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default GlobalState;
