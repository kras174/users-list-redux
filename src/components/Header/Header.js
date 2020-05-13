import React, { Component } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

class Header extends Component {
  renderNavigationButtons() {
    return (
      <>
        <NavLink className="nav-item" to="/table" activeClassName="checked">
          <div className="nav-item-table box">
            <span>Таблица</span>
          </div>
        </NavLink>
        <NavLink className="nav-item" to="/preview" activeClassName="checked">
          <div className="nav-item-preview box">
            <span>Превью</span>
          </div>
        </NavLink>
      </>
    );
  }
  render() {
    return <div className="nav">{this.renderNavigationButtons()}</div>;
  }
}

export default Header;
