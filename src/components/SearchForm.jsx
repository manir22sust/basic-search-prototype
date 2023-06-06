import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchArticles } from "../redux/Action";
import { FaSearch, FaTimes } from "react-icons/fa";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    dispatch(searchArticles(searchTerm));
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    dispatch(searchArticles(""));
  };

  useEffect(() => {
    dispatch(searchArticles(searchTerm));
    setSearchTerm(searchTerm);
  }, [searchTerm, dispatch]);
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Search"
      />

      {searchTerm ? (
        <button className="search-clear-btn" onClick={handleClearSearch}>
          <FaTimes />
        </button>
      ) : (
        <>
          <button className="search-btn" onClick={handleSearch}>
            <FaSearch />
          </button>
        </>
      )}
    </div>
  );
};
