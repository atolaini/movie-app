import React, { Component } from "react";
import "./styling/css/main.css";
import Main from "./containers/Main/Main";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
