import * as types from "../types";
import axios from "axios";
import { gameDetailsURL } from "../../pages/api/api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  dispatch({
    type: types.GET_DETAIL,
    payload: {
      game: detailData.data
    },
  });
};
