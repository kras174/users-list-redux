import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  inputFilter,
  inputFilterAction,
  inputFilterClear,
  isEnglish,
}) => {
  return (
    <div className="filter">
      <input
        className="filter-input"
        type="text"
        id="filter"
        placeholder={isEnglish ? "Search..." : "Поиск..."}
        value={inputFilter}
        onChange={inputFilterAction}
      />
      <i
        className={
          inputFilter
            ? "filter-clear filter-clear-active fas fa-times"
            : "filter-clear fas fa-times"
        }
        onClick={inputFilterClear}
      ></i>
    </div>
  );
};

Input.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  inputFilterAction: PropTypes.func.isRequired,
  inputFilterClear: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};
