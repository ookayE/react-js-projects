import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import MovieCard from "../Components/MovieCard";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((favoriteItem) => (
          <MovieCard key={favoriteItem.imdbID} movieItem={favoriteItem} />
        ))
      ) : (
        <p>Nope</p>
      )}
    </div>
  );
}
