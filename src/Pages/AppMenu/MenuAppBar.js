import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import interests from "../Interests/interests";
import { Switch, Route } from 'react-router-dom';
import bio from '../Bio/bio';
import {HashRouter} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import Home from '@material-ui/icons/Home';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
};

class MenuAppBar extends Component {
    state = {
        openDrawer: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            openDrawer: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button key={'Home'} onClick={() => this.props.history.push('bio')}>
                        <ListItemIcon> <Home /> </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>

                    <ListItem button key={'Running'} onClick={() => this.props.history.push('/interests')}>
                        <ListItemIcon> <DirectionsRun /> </ListItemIcon>
                        <ListItemText primary={'Running'} />
                    </ListItem>

                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                    <Switch>
                        <Paper className={classes.root} elevation={1}>
                            <Route exact path='/' component={bio}/>
                            <Route exact path='/bio' component={bio}/>
                            <Route path='/interests' component={interests}/>
                        </Paper>
                    </Switch>


                <Drawer anchor="left" open={this.state.openDrawer} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MenuAppBar));