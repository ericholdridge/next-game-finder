import * as types from "../types";

const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_GAMES:
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
