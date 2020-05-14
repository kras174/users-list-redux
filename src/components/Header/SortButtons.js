import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SortButtons extends Component {
  clickSortHandler = (e) => {
    e.preventDefault();
    this.props.sortAction(e);
    document.querySelectorAll(".sort-button").forEach((button) => {
      button.classList.remove("active");
    });
    document.querySelector(`#${e.target.id}`).classList.add("active");
  };

  clickDirectionHandler = (e) => {
    e.preventDefault();
    this.props.directionAction(e);
    document.querySelectorAll(".direction").forEach((button) => {
      button.classList.remove("active");
    });
    document.querySelector(`#${e.target.id}`).classList.add("active");
  };

  render() {
    return (
      <>
        <div className="sort">
          <button id="sortId" className="sort-button" onClick={this.clickSortHandler}>
            ID
          </button>
          <button id="sortName" className="sort-button" onClick={this.clickSortHandler}>
            Имя
          </button>
          <button id="sortAge" className="sort-button" onClick={this.clickSortHandler}>
            Возраст
          </button>
        </div>
        <div className="sort-reverse">
          <button id="sortForward" className="direction active" disabled={!this.props.sortType} onClick={this.clickDirectionHandler}>
            По возрастанию
          </button>
          <button id="sortBackward" className="direction" disabled={!this.props.sortType} onClick={this.clickDirectionHandler}>
            По убывванию
          </button>
        </div>
      </>
    );
  }
}

SortButtons.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortAction: PropTypes.func.isRequired,
  directionAction: PropTypes.func.isRequired,
};
