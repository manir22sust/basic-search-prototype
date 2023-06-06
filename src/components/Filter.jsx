import React, { useState } from "react";
import { setFilters } from "../redux/Action";
import { useDispatch } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Filter = () => {
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const onFilter = (filters) => {
    dispatch(setFilters(filters));
  };
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;

    const updatedFilters = checked
      ? [...selectedFilters, value]
      : selectedFilters.filter((filter) => filter !== value);

    setSelectedFilters(updatedFilters);

    onFilter(updatedFilters);
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="filter-container">
      <span className="title">Filter </span>
      <hr />
      <div className="manufacturer" onClick={() => setIsActive(!isActive)}>
        <div className="manufacturer-name">
          Manufacturer
          <div className="filter-button">
            {isActive ? (
              <button>
                <FaChevronDown />
              </button>
            ) : (
              <button>
                <FaChevronUp />
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
      {isActive && (
        <div className="accordion-content">
          <label>
            <input
              type="checkbox"
              value="Inwerk"
              checked={selectedFilters.includes("Inwerk")}
              onChange={handleFilterChange}
            />
            Inwerk
          </label>
          <label>
            <input
              type="checkbox"
              value="Interwerk"
              checked={selectedFilters.includes("Interwerk")}
              onChange={handleFilterChange}
            />
            Interwerk
          </label>
          <hr />
        </div>
      )}
    </div>
  );
};
