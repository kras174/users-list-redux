import React, { Component } from "react";
import PropTypes from "prop-types";

class InputFilter extends Component {
  renderFilterButtons() {
    const { inputFilter, inputFilterAction } = this.props;
    return (
      <>
        <button className="filter-item">ID</button>
        <button className="filter-item">Имя</button>
        <button className="filter-item">Возраст</button>
        <input className="filter-input" type="text" id="filter" placeholder="Введите имя" value={inputFilter} onChange={inputFilterAction} />
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
};

export default InputFilter;
