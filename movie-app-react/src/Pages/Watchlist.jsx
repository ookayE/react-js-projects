import { GlobalContext } from "../Context/Context";
import { useContext } from "react";
import MovieCard from "../Components/MovieCard";

export default function WatchList() {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {watchList && watchList.length > 0 ? (
        watchList.map((watchListItem) => (
          <MovieCard movieItem={watchListItem} />
        ))
      ) : (
        <p>Nothing on Watchlist yet!</p>
      )}
    </div>
  );
}
