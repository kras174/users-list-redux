import React, { Component } from "react";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { menuSwitchHandler } from "../actions/headerActions";

class HeaderContainer extends Component {
  render() {
    return (
      <div className="header">
        <div></div>
        <Header previewContent={this.props.previewContent} menuSwitchHandler={this.props.menuSwitchHandler} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  previewContent: store.content.previewContent,
});

const mapDispatchToProps = (dispatch) => ({
  menuSwitchHandler: () => dispatch(menuSwitchHandler()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
