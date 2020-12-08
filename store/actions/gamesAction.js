import * as types from "../types";
import { popularGamesURL } from "../../pages/api/api";
import { upcomingGamesURL } from "../../pages/api/api";
import axios from "axios";

export const loadGames = () => async (dispatch) => {
  // Fetch the data from the api
  const popularGames = await axios.get(popularGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  dispatch({
    type: types.FETCH_GAMES,
    payload: {
      popular: popularGames.data.results,
      upcoming: upcomingGames.data.results,
    },
  });
};
