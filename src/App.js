import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Switch, Route, Redirect } from "react-router-dom";
import TableContainer from "./components/Content/Table/TableContainer";
import PreviewContainer from "./components/Content/Preview/PreviewContainer";

const App = () => {
  return (
    <div className="App container">
      <HeaderContainer />
      <Switch>
        <Route path="/table" component={TableContainer} />
        <Route path="/preview" component={PreviewContainer} />
        <Redirect from={"/"} to={"/table"} />
      </Switch>
    </div>
  );
}

export default App;
