import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalContext } from "./Context/Context";
import MovieCard from "./Components/MovieCard";
import Navbar from "./Components/Navbar.jsx";

function App({}) {
  const {
    onSubmit,
    loading,
    handleSubmit,
    searchParam,
    setSearchParam,
    movieList,
    setMovielist,
  } = useContext(GlobalContext);

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  return (
    <div className="container">
      <Navbar />
      <div className="container pt-10">
        <form onSubmit={onSubmit} className="w-full flex justify-center">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
            placeholder="Search movies..."
            className="border border-black rounded-md mx-10 p-2"
          />
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Search
          </button>
        </form>
        {movieList && movieList.length > 0 ? (
          movieList.map((movieItem) => (
            <MovieCard key={movieItem.imdbID} movieItem={movieItem} />
          ))
        ) : (
          <p className="flex justify-center py-20 text-4xl">
            No movies to display
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
