import {
  FAIL_REQUEST,
  SUCCESS_REQUEST,
  MAKE_REQUEST,
  SEARCH_ARTICLES,
  SET_FILTERS,
  SET_CURRENT_PAGE,
} from "./ActionType";

const initialstate = {
  loading: true,
  articles: [],
  searchTerm: "",
  errmessage: "",
  filteredArticles: [],
  filters: [],
  currentPage: 1,
  itemsPerPage: 3,
};
export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case SUCCESS_REQUEST:
      return {
        loading: false,
        errmessage: "",
        articles: action.payload,
      };

    case SEARCH_ARTICLES:
      let searchTerm = action.payload;
      if (typeof searchTerm !== "string") {
        searchTerm = searchTerm.toString(); // convert non-string payload to string
      }
      searchTerm = searchTerm.trim(); // trim any leading/trailing whitespace
      const filteredArticles = state.articles.filter(
        (article) =>
          article.name.includes(searchTerm) ||
          article.description.includes(searchTerm) ||
          article.bmNumber.includes(searchTerm)
      );
      return {
        ...state,
        filteredArticles,
        searchTerm,
        currentPage: 1, // reset current page when performing a new search
      };
    case SET_FILTERS:
      const filters = action.payload;
      const filteredArticlesByFilters = state.articles.filter((article) =>
        filters.includes(article.detail_manufacturer)
      );
      return {
        ...state,
        filteredArticles: filteredArticlesByFilters,
        filters,
        currentPage: 1, // reset current page when applying filters
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};
