import { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";

function WatchedMovies() {
  const { state, handleRemoveFromWatched } = useContext(MovieContext);
  return (
    <div className="watched-movies">
      <h1>Watched Movies</h1>
      <div className="watched-wrapper">
        {state.watched && state.watched.length > 0 ? (
          state.watched.map((movieItem) => (
            <div key={movieItem.id}>
              <div className="movie-info">
                <h3>{movieItem.Title}</h3>
                <h4>{movieItem.Year}</h4>
              </div>

              <div className="buttons-wrapper">
                <button onClick={() => handleRemoveFromWatched(movieItem.id)}>
                  Remove From Watched
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>Watched Empty</h1>
        )}
      </div>
    </div>
  );
}

export default WatchedMovies;
