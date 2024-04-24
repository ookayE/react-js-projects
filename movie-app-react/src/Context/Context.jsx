import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  // const [watchList, setWatchList] = useState([])

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchParam);
  };

  const handleSubmit = async (searchParam) => {
    try {
      setLoading(true);
      const apiKey = process.env.REACT_APP_MOVIE_APP_API_KEY;
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchParam}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("API Response:", data); // Log the API response
      if (data.Response === "True") {
        setMovieList(data.Search);
        setLoading(false);
      } else {
        setMovieList([]);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleAddToFavorite = (getCurrentItem) => {
    let favoriteListCopy = [...favoriteList];

    const index = favoriteListCopy.findIndex(
      (item) => item.imdbID === getCurrentItem.imdbID
    );

    if (index === -1) {
      favoriteListCopy.push(getCurrentItem);
    } else {
      favoriteListCopy.splice(getCurrentItem);
    }

    setFavoriteList(favoriteListCopy);
  };

  return (
    <GlobalContext.Provider
      value={{
        onSubmit,
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        setLoading,
        movieList,
        setMovieList,
        handleAddToFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
