import {
  ADD_MOVIE_TO_WATCHED,
  ADD_MOVIE_TO_WATCHLIST,
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

    default:
      return state;
  }
}
