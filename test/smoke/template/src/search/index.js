"use strict";

import React from "react";
import ReactDOM from "react-dom";
import largeNumber from "large-number";
import logo from "../images/logo.png";
import "./search.less";

class Search extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      Text: null,
    };
    this.loadComponent = this.loadComponent.bind(this);
  }

  loadComponent() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('999', '1')
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        <div>{addResult}</div>
        Search Text ATM
        <img src={logo} onClick={this.loadComponent} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
