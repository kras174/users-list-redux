import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const NavMenu = ({ isEnglish, changeLanguage }) => {
  const langHandler = () => {
    document.querySelector(".lang-btn").classList.toggle("checked");
    changeLanguage();
  };

  const renderNavigationButtons = () => {
    return (
      <>
        <NavLink className="nav-item" to="/table" activeClassName="checked">
          <div className="nav-item-table box">
            <span>{isEnglish ? "Table" : "Таблица"}</span>
          </div>
        </NavLink>
        <NavLink className="nav-item" to="/preview" activeClassName="checked">
          <div className="nav-item-preview box">
            <span>{isEnglish ? "Preview" : "Превью"}</span>
          </div>
        </NavLink>
        <div className="lang-item">
          <button className="lang-btn" onClick={langHandler}>
            {/* {isEnglish ? "Русский" : "English"} */}
            <div className="knobs"></div>
            <div className="layer"></div>
          </button>
        </div>
      </>
    );
  };

  return <div className="nav">{renderNavigationButtons()}</div>;
};

NavMenu.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  isEnglish: PropTypes.bool.isRequired,
};
