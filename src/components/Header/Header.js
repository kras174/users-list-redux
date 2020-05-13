import React, { Component, Fragment } from "react";
import "./Header.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Header extends Component {
  renderNavigationButtons() {
    const { previewContent, menuSwitchHandler } = this.props;
    return (
      <Fragment>
        <Link to="/table">
          <label>
            <input type="radio" name="radio" checked={!previewContent} onChange={menuSwitchHandler} />
            <div className="front-end box">
              <span>Таблица</span>
            </div>
          </label>
        </Link>
        <Link to="/preview">
          <label>
            <input type="radio" name="radio" checked={previewContent} onChange={menuSwitchHandler} />
            <div className="back-end box">
              <span>Превью</span>
            </div>
          </label>
        </Link>
      </Fragment>
    );
  }
  render() {
    return <div className="nav">{this.renderNavigationButtons()}</div>;
  }
}

Header.propTypes = {
  previewContent: PropTypes.bool.isRequired,
  menuSwitchHandler: PropTypes.func.isRequired,
};

export default Header;
