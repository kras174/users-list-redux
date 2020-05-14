import React, { Component } from "react";
import NavMenu from "../components/Header/NavMenu";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/contentActions";
import { inputFilterAction } from "../actions/filterActions";
import { sortAction, directionAction } from "../actions/sortActions";

import InputFilter from "../components/Header/InputFilter";
import SortButtons from "../components/Header/SortButtons";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { inputFilter, inputFilterAction, sortType, sortDirection, sortAction, directionAction } = this.props;
    return (
      <div className="header">
        <div className="header-left">
          <SortButtons sortType={sortType} sortDirection={sortDirection} sortAction={sortAction} directionAction={directionAction} />
          <InputFilter inputFilter={inputFilter} inputFilterAction={inputFilterAction} />
        </div>
        <div className="header-right">
          <NavMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  inputFilter: store.filter.inputFilter,
  sortType: store.content.sortType,
  sortDirection: store.content.sortDirection,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  inputFilterAction: (e) => dispatch(inputFilterAction(e)),
  sortAction: (e) => dispatch(sortAction(e)),
  directionAction: (e) => dispatch(directionAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
