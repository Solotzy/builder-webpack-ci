"use strict";

//webpack打包的时候，可以在js文件中混用require和export。但是不能混用import 以及module.exports。
// import React from 'react';
// import largeNumber from 'large-number';
// import logo from './images/logo.png';
// import './search.less';
const React = require('react');
const largeNumber = require('large-number');
const logo = require('../images/logo.png');
const s = require('./search.less');

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
        Search Text
        <img src={logo} onClick={this.loadComponent} />
      </div>
    );
  }
}

module.exports = <Search />;
