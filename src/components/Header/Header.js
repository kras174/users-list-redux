import React, { Component, Fragment } from "react";
import "./Header.scss";

class Header extends Component {
  renderNavigationButtons() {
    return (
      <Fragment>
        <label>
          <input type="radio" name="radio" defaultChecked />
          <div className="front-end box">
            <span>Таблица</span>
          </div>
        </label>

        <label>
          <input type="radio" name="radio" />
          <div className="back-end box">
            <span>Превью</span>
          </div>
        </label>
      </Fragment>
    );
  }
  render() {
    return <div className="nav">{this.renderNavigationButtons()}</div>;
  }
}

export default Header;
