import { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";
import MovieCard from "./movie-card";
import "../movie.css";
import MovieWatchList from "./watchlist";
import WatchedMovies from "./watched";

export default function MovieApp() {
  const { searchMovieParam, setSearchMovieParam, loading, movieSearchResults } =
    useContext(MovieContext);

  return (
    <div className="movie-app">
      <h1>Movie App</h1>

      <div className="movie-lists-container">
        <MovieWatchList />
        <WatchedMovies />
      </div>
      <div className="search-container">
        <input
          type="text"
          name="searchMovieParam"
          value={searchMovieParam}
          onChange={(e) => setSearchMovieParam(e.target.value)}
          placeholder="Search for a movie..."
        />
      </div>

      {loading ? <h1>Fetching Movies..</h1> : null}

      <div className="movie-search-results-container">
        {movieSearchResults && movieSearchResults.length > 0 && !loading
          ? movieSearchResults.map((movieItem) => (
              <MovieCard movieItem={movieItem} />
            ))
          : null}
      </div>
    </div>
  );
}
