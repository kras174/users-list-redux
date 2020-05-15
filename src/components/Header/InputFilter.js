import React from "react";
import PropTypes from "prop-types";

export const Input = ({ inputFilter, inputFilterAction, isEnglish }) => {
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
    </div>
  );
};

Input.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  inputFilterAction: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};
