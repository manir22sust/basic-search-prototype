import { setCurrentPage } from "../redux/Action";
import { useSelector, useDispatch } from "react-redux";

export const Pagination = ({ totalPages }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.article.currentPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // add the previous page button
    if (currentPage > 1) {
      pageNumbers.push(
        <button key="prev" onClick={() => handlePageChange(currentPage - 1)}>
          {"<<"}
        </button>
      );
    }

    // generate page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    // add the next page button
    if (currentPage < totalPages) {
      pageNumbers.push(
        <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
          {">>"}
        </button>
      );
    }

    return pageNumbers;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
};
