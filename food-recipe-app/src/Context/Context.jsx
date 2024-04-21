import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFravoritesList] = useState([]);

  //useNavigate hook routes to different pages based on events
  const navigate = useNavigate();

  //event handler for form submissions
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddToFavorite = (getCurrentItem) => {
    let favoritesListCopy = [...favoritesList]; //create copy of favorites list to push/remove new recipes to

    //
    const index = favoritesListCopy.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      favoritesListCopy.push(getCurrentItem); //if the item is not already in the favorites list, add it
    } else {
      favoritesListCopy.splice(getCurrentItem); //if the item IS already in the list, remove it
    }

    setFravoritesList(favoritesListCopy); //update state
  };

  console.log(favoritesList, "favorite");

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
