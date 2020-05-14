import React, { Component } from "react";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/contentActions";
import { inputFilterAction } from "../actions/filterActions";
import InputFilter from "../components/Header/InputFilter";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { inputFilter, inputFilterAction } = this.props;
    return (
      <div className="header">
        <InputFilter inputFilter={inputFilter} inputFilterAction={inputFilterAction} />
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  inputFilter: store.filter.inputFilter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  inputFilterAction: (e) => dispatch(inputFilterAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
