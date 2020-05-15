import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SortButtons extends Component {
  clickSortHandler = (e) => {
    e.preventDefault();
    this.props.sortAction(e);
    document.querySelectorAll(".sort-button").forEach((button) => {
      button.classList.remove("checked");
    });
    document.querySelector(`#${e.target.id}`).classList.add("checked");
  };

  clickDirectionHandler = (e) => {
    e.preventDefault();
    this.props.directionAction(e);
    document.querySelectorAll(".direction").forEach((button) => {
      button.classList.remove("checked");
    });
    document.querySelector(`#${e.target.id}`).classList.add("checked");
  };

  render() {
    return (
      <>
        <div className="sort">
          <button id="sortId" className="sort-button box" onClick={this.clickSortHandler}>
            {this.props.isEnglish ? "Id" : "Идентификатор"}
          </button>
          <button id="sortName" className="sort-button box" onClick={this.clickSortHandler}>
            {this.props.isEnglish ? "Name" : "Имя"}
          </button>
          <button id="sortAge" className="sort-button box" onClick={this.clickSortHandler}>
            {this.props.isEnglish ? "Age" : "Возраст"}
          </button>
        </div>
        <div className="sort-reverse">
          <button id="sortForward" className="direction box checked" disabled={!this.props.sortType} onClick={this.clickDirectionHandler}>
            {this.props.isEnglish ? "Sort ascending" : "По возрастанию"}
          </button>
          <button id="sortBackward" className="direction box" disabled={!this.props.sortType} onClick={this.clickDirectionHandler}>
            {this.props.isEnglish ? "Sort descending" : "По убыванию"}
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
  isEnglish: PropTypes.bool.isRequired,
};
