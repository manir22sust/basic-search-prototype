import axios from "axios";
import { articleURL } from "../utils/URL";

import {
  MAKE_REQUEST,
  FAIL_REQUEST,
  SUCCESS_REQUEST,
  SEARCH_ARTICLES,
  SET_FILTERS,
  SET_CURRENT_PAGE,
} from "./ActionType";

// action creators fetch data
export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const successRequest = (data) => {
  return {
    type: SUCCESS_REQUEST,
    payload: data,
  };
};

// action creators search
export const searchArticles = (articles) => ({
  type: SEARCH_ARTICLES,
  payload: articles,
});

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const FetchArticleList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    //setTimeout(() => {
    // when using .env  axios.get(import.meta.env.VITE_API_URL)
    axios
      .get(articleURL)
      .then((res) => {
        const articlelist = res.data;
        dispatch(successRequest(articlelist));
        dispatch(searchArticles(articlelist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};
