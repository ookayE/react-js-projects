import { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";

function MovieWatchList() {
  const { state } = useContext(MovieContext);

  function handleAddToWatchlist(movie) {
    console.log("object");
  }

  function handleAddToWatched(movie) {
    console.log("object");
  }

  return (
    <div className="movie-watchlist">
      <h1>Watchlist</h1>
      <div className="watch-list-wrapper">
        {state.watchList && state.watchList.length > 0 ? (
          state.watchList.map((movieItem) => (
            <div key={movieItem.id}>
              <div className="movie-info">
                <h3>{movieItem.Title}</h3>
                <h4>{movieItem.Year}</h4>
              </div>

              <div className="buttons-wrapper">
                <button>Remove From Watchlist</button>
              </div>
            </div>
          ))
        ) : (
          <h1>Watchlist Empty</h1>
        )}
      </div>
    </div>
  );
}

export default MovieWatchList;
