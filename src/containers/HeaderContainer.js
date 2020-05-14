import React, { Component } from "react";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/contentActions";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="header">
        <Header />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(null, mapDispatchToProps)(HeaderContainer);
