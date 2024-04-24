import { useContext } from "react";
import MovieCard from "../Components/MovieCard";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);
}

return (
  <div>
    <p>Hello</p>
    {favoriteList && favoriteList.length > 0 ? (
      favoriteList.map((item) => <MovieCard item={item} />)
    ) : (
      <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
        Nothing here. Please search.
      </p>
    )}
  </div>
);
