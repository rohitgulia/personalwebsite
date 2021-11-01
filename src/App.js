import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Main from './Pages/main';

class App extends Component {
  render() {
      const { classes } = this.props;
    return (
      <div>
        <Main />
      </div>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default App;
