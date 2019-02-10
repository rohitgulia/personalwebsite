import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import bio from './Pages/Bio/bio';
import interests from './Pages/Interests/interests';
import {HashRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
});

class App extends Component {
  render() {
      const { classes } = this.props;
    return (
      <div className="App">
          <HashRouter>
          <Switch>
              <Paper className={classes.root} elevation={1}>
                <Route exact path='/' component={bio}/>
                <Route path='/interests' component={interests}/>
              </Paper>
          </Switch>
          </HashRouter>
      </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
