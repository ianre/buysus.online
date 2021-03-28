import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const AppComponent = lazy(() => import("./pages/Main"));

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <AppComponent></AppComponent>   
      </BrowserRouter>
    )
  }
}
export default App