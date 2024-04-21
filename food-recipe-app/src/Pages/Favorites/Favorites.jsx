import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";
import RecipeItem from "../../Components/RecipeItem";

const Favorites = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {/* Like with our home page, for every item in our favoriteslist, render a <RecipeItem/>, which receives the item as a prop */}
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing here. Please search
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
