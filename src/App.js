import React from "react";
import "./App.scss";
import HeaderContainer from "./containers/HeaderContainer";
import ContentContainer from "./containers/ContentContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
