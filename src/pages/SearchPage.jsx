import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchArticleList } from "../redux/Action";

// logo
import inwerk from "../assets/inwerk.png";

// components
import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const filteredArticles = useSelector(
    (state) => state.article.filteredArticles
  );
  const currentPage = useSelector((state) => state.article.currentPage);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(FetchArticleList());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  //  Pagination and current results
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentResults = filteredArticles.slice(startIndex, endIndex);

  return (
    <div className="app">
      <h2 className="logo">
        <img src={inwerk} alt="" />
      </h2>
      <SearchForm />
      <div className="container">
        <Filter />
        <div className="article-container">
          <SearchResults results={currentResults} />
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};
