import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import logo from '../logo.svg';

class Main extends PureComponent {
  state = {};
  componentDidMount() {};
  doSomething = () => {};
  
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Don't be sus!</p>
          <p>Buy sustainable products</p>
          <hr></hr>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reacts
          </a>
        </header>
      </div>
    );
  }
}

export default Main;
