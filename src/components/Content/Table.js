import React, { Component, Fragment } from "react";
import Loader from "../UI/Loader/Loader";
import PropTypes from "prop-types";
// import { Icons } from "../UI/Icons/Icons";
import "./Table.scss";

class Table extends Component {
  sortList = (type, direction, array) => {
    switch (type) {
      case "Name":
        return array.sort((a, b) => {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
          if (direction === "Forward") {
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
          } else if (direction === "Backward") {
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
          }
          return 0;
        });
      case "Id":
        return array.sort((a, b) => {
          if (direction === "Forward") return a.id - b.id;
          else if (direction === "Backward") return b.id - a.id;
          return 0;
        });
      case "Age":
        return array.sort((a, b) => {
          if (direction === "Forward") return a.age - b.age;
          else if (direction === "Backward") return b.age - a.age;
          return 0;
        });
      default:
        break;
    }
  };

  renderTable = () => {
    const { usersList, inputFilter, sortType, sortDirection } = this.props;
    // сортировка
    if (sortType) this.sortList(sortType, sortDirection, usersList);

    return usersList.map((user) => {
      //фильтрация
      if (inputFilter) {
        if (user.name.toLowerCase().indexOf(inputFilter.toLowerCase()) === -1) {
          return null;
        }
      }
      // вывод контекта
      const iconPath = require(`../../data/images/${user.image}.svg`);
      return (
        <div key={user.id} className="users-table-item">
          <div className="table-item-id">{user.id}</div>
          {/*Картинка через img */}
          <img className="table-item-icon" src={iconPath} alt=""></img>
          {/*Картинка через Icon компонент */}
          {/* <Icons name={user.image} width="50" height="50" /> */}
          <p className="table-item-name">{user.name}</p>
          <p className="table-item-age">{user.age}</p>
          <p className="table-item-phone">{user.phone}</p>
          <span className="table-item-fav">
            <i className={user.favourite ? "fas fa-star" : "far fa-star"} onClick={this.props.starHandler.bind(this, user.id)} />
          </span>
        </div>
      );
    });
  };

  render() {
    const { usersList, isFetching } = this.props;
    return (
      <Fragment>
        {isFetching ? (
          <Loader />
        ) : usersList.length !== 0 ? (
          <div className="users-table">{this.renderTable()}</div>
        ) : (
          <h2>Список пользователей пуст!</h2>
        )}
      </Fragment>
    );
  }
}

Table.propTypes = {
  usersList: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  starHandler: PropTypes.func.isRequired,
  inputFilter: PropTypes.string.isRequired,
  sortType: PropTypes.string,
  sortDirection: PropTypes.string,
};

export default Table;
