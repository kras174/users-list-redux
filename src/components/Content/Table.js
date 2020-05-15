import React, { Component, Fragment } from "react";
import Loader from "../UI/Loader/Loader";
import { num2str, sortList } from "../../helpers/helpers";
import PropTypes from "prop-types";
// import { Icons } from "../UI/Icons/Icons";
import "./Table.scss";

class Table extends Component {
  renderTable = () => {
    const { usersList, inputFilter, sortType, sortDirection, isEnglish } = this.props;
    // сортировка
    if (sortType) sortList(sortType, sortDirection, usersList);
    // вывод контекта
    return usersList.map((user) => {
      const iconPath = require(`../../data/images/${user.image}.svg`);
      //фильтрация
      if (inputFilter) {
        if (user.name.toLowerCase().indexOf(inputFilter.toLowerCase()) === -1) {
          return null;
        }
      }

      return (
        <div key={user.id} className="users-table-item">
          <div className="table-item-id">{user.id}</div>
          {/*Картинка через img */}
          <img className="table-item-icon" src={iconPath} alt=""></img>
          {/*Картинка через Icon компонент */}
          {/* <Icons name={user.image} width="50" height="50" /> */}
          <p className="table-item-name">{user.name}</p>
          <p className="table-item-age">
            {user.age}
            {isEnglish ? " years" : num2str(user.age, [" год", " года", " лет"])}
          </p>
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
  isEnglish: PropTypes.bool.isRequired,
};

export default Table;
