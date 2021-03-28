import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import logo from '../logo.svg';
import hand from '../res/hand.png';
import leaf from '../res/leaves.png';
import TextField from '@material-ui/core/TextField';

class Main extends PureComponent {
  state = {};
  componentDidMount() {};
  doSomething = () => {};

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
            {/** 
          <img src={logo} className="App-logo" alt="logo" />
          */}
          <img src={leaf} className="Spin-move" alt="logo" />
          <img src={hand} className="Hand" alt="logo" />
          <p>Don't be sus! <br /> Buy sustainable products</p>

          <TextField
            label="Search For Sustainable Products"
            variant="outlined"
            InputProp={{type: 'search'}}
          />
          
          <hr></hr>
          <a className="App-link" href="https://www.amazon.com/b?node=21221608011" target="_blank" rel="noopener noreferrer">
            Learn More =={">"}
          </a>
        </header>
      </div>
    );
  }
}

export default Main;
