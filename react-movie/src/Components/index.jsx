import { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";

export default function MovieApp() {
  const { searchMovieParam, setSearchMovieParam } = useContext(MovieContext);

  return (
    <div className="movie-app">
      <h1>Movie App</h1>
      <div className="search-container">
        <input
          type="text"
          name="searchMovieParam"
          value={searchMovieParam}
          onChange={(e) => setSearchMovieParam(e.target.value)}
          placeholder="Search for a movie..."
        />
      </div>
    </div>
  );
}
