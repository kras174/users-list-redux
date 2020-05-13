import React from "react";
import HeaderContainer from "./containers/HeaderContainer";
import TableContainer from "./containers/TableContainer";
import PreviewContainer from "./containers/PreviewContainer";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
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
