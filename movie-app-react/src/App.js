import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalContext } from "./Context/Context";
import MovieCard from "./Components/MovieCard";
import Navbar from "./Components/Navbar.jsx";
import Favorites from "./Pages/Favorites.jsx";
import WatchList from "./Pages/Watchlist.jsx";
import Home from "./Pages/Home.jsx";

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
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchlist" element={<WatchList />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </div>
  );
}

export default App;
