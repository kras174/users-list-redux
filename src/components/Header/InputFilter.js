import React, { Component } from "react";
import PropTypes from "prop-types";

class InputFilter extends Component {
  renderFilterButtons() {
    const { inputFilter, inputFilterAction } = this.props;
    return (
      <>
        <input
          className="filter-input"
          type="text"
          id="filter"
          placeholder={this.props.isEnglish ? "Search..." : "Поиск..."}
          value={inputFilter}
          onChange={inputFilterAction}
        />
      </>
    );
  }

  render() {
    return <div className="filter">{this.renderFilterButtons()}</div>;
  }
}

InputFilter.propTypes = {
  inputFilter: PropTypes.string.isRequired,
  inputFilterAction: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default InputFilter;
