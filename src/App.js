import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import bio from './Pages/Bio/Bio';
import interests from './Pages/Interests/Interests';
import {HashRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuAppBar from './Pages/AppMenu/MenuAppBar';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: green,
    type: 'dark'
  },
  typography: { useNextVariants: true },
});

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
});

// const theme = createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//   },
//   status: {
//     danger: 'orange',
//   },
// });

class App extends Component {
  render() {
      const { classes } = this.props;
    return (
      <div className={classes.root}>
          <HashRouter>
              <ParallaxProvider>
                <MuiThemeProvider theme={theme}>
                  <MenuAppBar />
                </MuiThemeProvider>
              </ParallaxProvider>
          </HashRouter>
      </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
