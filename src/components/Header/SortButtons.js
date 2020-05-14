import React, { Component } from "react";

export default class SortButtons extends Component {
  render() {
    const { sortAction, directionAction } = this.props;
    return (
      <>
        <div className="sort">
          <button id="sortId" className="sort-button" onClick={sortAction}>
            ID
          </button>
          <button id="sortName" className="sort-button" onClick={sortAction}>
            Имя
          </button>
          <button id="sortAge" className="sort-button" onClick={sortAction}>
            Возраст
          </button>
        </div>
        <div className="sort-reverse">
          <button id="sortForward" className="sort-button" onClick={directionAction}>
            По возрастанию
          </button>
          <button id="sortBackward" className="sort-button" onClick={directionAction}>
            По убывванию
          </button>
        </div>
      </>
    );
  }
}
