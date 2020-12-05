import * as types from "../types";
import { popularGamesURL } from "../../pages/api/api";

export const loadGames = () => async (dispatch) => {
  // Fetch the data from the api
  await fetch(popularGamesURL())
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: types.FETCH_GAMES,
        payload: {
          popular: data.results,
        },
      })
    );
};
