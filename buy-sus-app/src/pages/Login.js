import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import logo from "../logo.svg";
import hand from "../res/hand.png";
import leaf from "../res/leaves.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      productList: [],
    };
  }
  componentDidMount() {}

  handleChange = (e) => {
    this.setState(() => ({ value: e.target.value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/api/${this.state.value}`)
      .then((result) => result.json())
      .then((result) =>
        result ? this.setState(() => ({ productList: result })) : null
      );
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          {/** 
          <img src={logo} className="App-logo" alt="logo" />
          <img src={leaf} className="Spin-move" alt="logo" />
          <img src={hand} className="Hand" alt="logo" />
            */}

          <h>0</h>
          <p>My Points </p>

          <Button variant="contained">View My Points History</Button>

          <p></p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              label="Search For Sustainable Products"
              variant="outlined"
              InputProp={{ type: "search" }}
              onChange={this.handleChange.bind(this)}
            />
          </form>
          <hr></hr>
          <div>
            {this.state.productList.map((product) => (
              <div style={{ maxWidth: "30rem" }}>
                <Link href={product.link}>{product.name}</Link>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <small>{product.price}</small>
                  <small>{product.review}</small>
                </div>
              </div>
            ))}
          </div>
          <a
            className="App-link"
            href="https://www.amazon.com/b?node=21221608011"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More =={">"}
          </a>
        </header>
      </div>
    );
  }
}

export default Login;
