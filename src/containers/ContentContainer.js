import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/contentActions";
import Preview from "../components/Content/Preview";
import Table from "../components/Content/Table";

class ContentContainer extends Component {
  render() {
    const { usersList, isFetching, error, fetchUsers } = this.props;
    return (
      <Fragment>
        <Table usersList={usersList} isFetching={isFetching} error={error} fetchUsers={fetchUsers} />
        <Preview usersList={usersList} isFetching={isFetching} error={error} fetchUsers={fetchUsers} />
      </Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    usersList: store.content.usersList,
    isFetching: store.content.isFetching,
    error: store.content.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
