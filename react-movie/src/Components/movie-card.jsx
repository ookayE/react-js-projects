import { useContext } from "react";
import { MovieContext } from "../Context/GlobalState";

function MovieCard({ movieItem }) {
  const { handleAddToWatched, handleAddToWatchlist, state } =
    useContext(MovieContext);

  return (
    <div className="movie-card">
      <div className="image">
        {movieItem?.Poster ? (
          <img src={movieItem.Poster} />
        ) : (
          <div className="fill-image">No Image Available</div>
        )}
      </div>

      <div className="movie-info">
        <h3>{movieItem.Title}</h3>
        <h4>{movieItem.Year}</h4>
      </div>

      <div className="buttons-wrapper">
        <button
          disabled={
            state.watchList.findIndex((item) => item.id === movieItem.id) > -1
          }
          onClick={() => handleAddToWatchlist(movieItem)}
        >
          Add to Watchlist
        </button>
        <button
          disabled={
            state.watched.findIndex((item) => item.id === movieItem.id) > 1
          }
          onClick={() => handleAddToWatched(movieItem)}
        >
          Add to Watched
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
