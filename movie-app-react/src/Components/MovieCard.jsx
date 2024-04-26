import { useContext } from "react";
import { GlobalContext } from "../Context/Context";

export default function MovieCard({ movieItem }) {
  const { handleAddToFavorite, handleAddToWatchlist, watchList, favoriteList } =
    useContext(GlobalContext);

  const isFavorite = favoriteList.some((item) => item.id === movieItem.id);
  const isOnWatchlist = watchList.some((item) => item.id === movieItem.id);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex bg-black p-3 my-2 rounded-xl">
        <div className="md:flex-shrink-0">
          <img
            className="w-full object-cover md:w-48 rounded-xl`"
            src={movieItem.Poster}
            alt="Movie Poster"
          />
        </div>
        <div className="p-8">
          <h1 className="uppercase tracking-wide text-3xl text-indigo-500 font-bold">
            {movieItem.Title}
          </h1>
          <p className="mt-2 text-gray-500">{movieItem.Year}</p>
          {/* Additional movie information */}
          <button
            type="submit"
            onClick={() => handleAddToFavorite(movieItem)}
            className="rounded-md mt-5 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Favorites
          </button>
          <button
            type="submit"
            onClick={() => handleAddToWatchlist(movieItem)}
            className="rounded-md mt-5 bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
