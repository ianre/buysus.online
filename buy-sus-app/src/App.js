import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Don't be sus! 
        </p>


        
        <p>
        Buy sustainable products
        </p>
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
      
      </BrowserRouter>
    )
  }
}
export default App