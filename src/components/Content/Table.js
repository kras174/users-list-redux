import React, { Component } from "react";
import Loader from "../UI/Loader/Loader";
import PropTypes from "prop-types";
import { Icons } from "../UI/Icons/Icons";
import "./Table.scss";

export default class Table extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderTable = () => {
    return this.props.usersList.map((user) => {
      const iconPath = require(`../../data/images/${user.image}.svg`);
      return (
        <div key={user.id} className="users-list-item">
          {/*Картинка через img */}
          {/* <img src={iconPath} alt=""></img> */}
          {/*Картинка через Icon компонент */}
          <Icons name={user.image} width="50" height="50" />
          <p className="item-name">{user.name}</p>
          <p className="item-age">{user.age}</p>
          <p className="item-phone">{user.phone}</p>
          <span className="item-fav">*</span>
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
          <div className="users-list">{this.renderTable()}</div>
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
