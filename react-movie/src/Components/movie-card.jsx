function MovieCard({ movieItem }) {
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
        <button>Add to Watchlist</button>
        <button>Add to Watched</button>
      </div>
    </div>
  );
}

export default MovieCard;
