function MovieCard({ movieItem }) {
  return (
    <div className="movie-card">
      <h2>{movieItem.Title}</h2>
      <p>{movieItem.Year}</p>
      <img src={movieItem.Poster} />
    </div>
  );
}

export default MovieCard;
