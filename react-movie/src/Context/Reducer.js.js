import {
  ADD_MOVIE_TO_WATCHED,
  ADD_MOVIE_TO_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHLIST,
  REMOVE_MOVIE_FROM_WATCHED,
  MOVE_MOVIE_TO_WATCHED,
} from "../Components/types";

export function Reducer(state, action) {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST:
      console.log(action);
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };

    case ADD_MOVIE_TO_WATCHED:
      console.log(action);
      return {
        ...state,
        watched: [action.payload, ...state.watched],
      };

    case REMOVE_MOVIE_FROM_WATCHLIST:
      console.log("removed from watchList");
      return {
        ...state,
        watchList: state.watchList.filter(
          (movieitem) => movieitem.id !== action.payload
        ),
      };

    case REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movieItem) => movieItem.id !== action.payload
        ),
      };

    case MOVE_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movieItem) => movieItem.id !== action.payload
        ),
        watched: [action.payload, ...state.watched],
      };
    default:
      return state;
  }
}
