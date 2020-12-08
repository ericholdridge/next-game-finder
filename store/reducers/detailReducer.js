import * as types from "../types";

const initialState = {
  game: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DETAIL:
      return {
        ...state,
        game: action.payload.game,
      };
    default: {
      return { ...state };
    }
  }
};

export default detailReducer;
