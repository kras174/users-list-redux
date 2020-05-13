import React, { Component } from "react";
import Loader from "../UI/Loader/Loader";
import PropTypes from "prop-types";
// import { Icons } from "../UI/Icons/Icons";
import "./Table.scss";

export default class Table extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderTable = () => {
    return this.props.usersList.map((user) => {
      const iconPath = require(`../../data/images/${user.image}.svg`);
      return (
        <div key={user.id} className="users-table-item">
          {/*Картинка через img */}
          <img className="table-item-icon" src={iconPath} alt=""></img>
          {/*Картинка через Icon компонент */}
          {/* <Icons name={user.image} width="50" height="50" /> */}
          <p className="table-item-name">{user.name}</p>
          <p className="table-item-age">{user.age}</p>
          <p className="table-item-phone">{user.phone}</p>
          <span className="table-item-fav">
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </span>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : this.props.usersList.length !== 0 ? (
          <div className="users-table">{this.renderTable()}</div>
        ) : (
          <h2>Список пользователей пуст!</h2>
        )}
      </>
    );
  }
}

Table.propTypes = {
  usersList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};
