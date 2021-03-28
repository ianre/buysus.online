import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  withStyles,
  Grid,
  Container,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import logo from "../logo.svg";
import hand from "../res/hand.png";
import CPF from "../res/CPF.png";
import leaf from "../res/leaves.png";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    textAlign: "center",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperGreen: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#3C9D46",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">
        Buy <b>Sus</b>tainable Products
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={8} md={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5">How can I buy sustainably?</Typography>
            <hr></hr>
            <Typography variant="body1">
              You might have notived this tag while shopping on Amazon:
            </Typography>
            <img src={CPF} className="Hand" alt="logo" />
            <Typography variant="body1">
              A select number of trusted third-party organizations have created
              their own certifications to highlight products that meet
              sustainability standards and help preserve the natural world.
            </Typography>

            <Typography variant="body1">
              Climate Pledge Friendly recognizes products with improvements in
              at least one aspect of sustainability.
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={4} md={12}>
          <Paper className={classes.paper}>
            <Box component="span" display="block">
              <hr color="white"></hr>
              <br></br>
              <img src={leaf} className="Spin-move" alt="logo" />
              <hr color="white"></hr>
              <img src={hand} className="Hand" alt="logo" />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paperGreen}>
            <Typography variant="h5">
              As online shoppers, it is vital to understand the impact of the
              products we purchase. In a connected world, every small action
              matters.
            </Typography>

            <Typography variant="h2">
              <a
                className="App-link"
                href="https://www.amazon.com/b?node=21221608011"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn How =={">"}
              </a>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
