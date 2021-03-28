import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import logo from "./logo.svg";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./App.css";

const AppComponent = lazy(() => import("./pages/Main"));

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one",],
  },
  {
    title: "Resources",
    description: ["Resource", "Resource name", "Another resource", "Final resource", ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://buysus.online/">
        Buy Sus Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment />}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Buy <b>Sus</b>tainable!🌱
            </Typography>
            <nav>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Features
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Enterprise
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Support
              </Link>
            </nav>
            <Link to="/pages/login"><Button
              href="#"
              color="primary"
              variant="outlined"
              className={classes.link}
            >
              Login
            </Button>
            </Link>
          </Toolbar>
        </AppBar>


        <Switch>
          <Route path="/locations">
            <AppComponent />
          </Route>
          <Route path="">
            <AppComponent />
          </Route>
        </Switch>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Suspense>
    </BrowserRouter>
  );
}
