import React, { Component } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFilter: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      userFilter: e.target.value,
    });
    // this.props.onChange(e.target.value);
  };

  renderFilterButtons() {
    return (
      <>
        <button className="filter-item">ID</button>
        <button className="filter-item">Имя</button>
        <button className="filter-item">Возраст</button>
        <input
          className="filter-input"
          type="text"
          id="filter"
          placeholder="Введите имя"
          value={this.state.userFilter}
          onChange={this.handleChange}
        />
      </>
    );
  }

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
    return (
      <>
        <div className="filter">{this.renderFilterButtons()}</div>
        <div className="nav">{this.renderNavigationButtons()}</div>
      </>
    );
  }
}

export default Header;
