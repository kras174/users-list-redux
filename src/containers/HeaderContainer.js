import React, { Component } from "react";
import { NavMenu } from "../components/Header/NavMenu";
import { connect } from "react-redux";

import { fetchUsers, changeLanguage } from "../actions/contentActions";
import { inputFilterAction } from "../actions/filterActions";
import { sortAction, directionAction } from "../actions/sortActions";

import { Input } from "../components/Header/InputFilter";
import { SortButtons } from "../components/Header/SortButtons";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { inputFilter, inputFilterAction, sortType, sortAction, directionAction, changeLanguage, isEnglish } = this.props;
    return (
      <div className="header">
        <div className="header-left">
          <SortButtons isEnglish={isEnglish} sortType={sortType} sortAction={sortAction} directionAction={directionAction} />
          <Input isEnglish={isEnglish} inputFilter={inputFilter} inputFilterAction={inputFilterAction} />
        </div>
        <div className="header-right">
          <NavMenu isEnglish={isEnglish} changeLanguage={changeLanguage} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  inputFilter: store.filter.inputFilter,
  sortType: store.content.sortType,
  sortDirection: store.content.sortDirection,
  isEnglish: store.content.isEnglish,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  inputFilterAction: (e) => dispatch(inputFilterAction(e)),
  sortAction: (e) => dispatch(sortAction(e)),
  directionAction: (e) => dispatch(directionAction(e)),
  changeLanguage: () => dispatch(changeLanguage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
