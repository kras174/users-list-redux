import React, { Component } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class NavMenu extends Component {
  langHandler = () => {
    document.querySelector(".lang-btn").classList.toggle("checked");
    this.props.changeLanguage();
  };

  renderNavigationButtons() {
    return (
      <>
        <NavLink className="nav-item" to="/table" activeClassName="checked">
          <div className="nav-item-table box">
            <span>{this.props.isEnglish ? "Table" : "Таблица"}</span>
          </div>
        </NavLink>
        <NavLink className="nav-item" to="/preview" activeClassName="checked">
          <div className="nav-item-preview box">
            <span>{this.props.isEnglish ? "Preview" : "Превью"}</span>
          </div>
        </NavLink>
        <div className="lang-item">
          <button className="lang-btn" onClick={this.langHandler}>
            {/* {this.props.isEnglish ? "Русский" : "English"} */}
            <div className="knobs"></div>
            <div className="layer"></div>
          </button>
        </div>
      </>
    );
  }
  render() {
    return (
      <>
        <div className="nav">{this.renderNavigationButtons()}</div>
      </>
    );
  }
}

NavMenu.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};

export default NavMenu;
