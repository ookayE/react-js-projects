import { createContext, useState, useDebounce, useEffect } from "react";

export const MovieContext = createContext(null);

function GlobalState({ children }) {
  const [searchMovieParam, setSearchMovieParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieSearchResults, setMovieSearchResults] = useState([]);

  console.log(searchMovieParam);

  useEffect(() => {});

  return (
    <MovieContext.Provider value={{ searchMovieParam, setSearchMovieParam }}>
      {children}
    </MovieContext.Provider>
  );
}

export default GlobalState;
