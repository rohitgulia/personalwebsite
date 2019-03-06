import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    avatar: {
        margin: 10,
    }
});


class ShortTagLine extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center">
                        <Typography variant="h5" component="h2" className='shortTagLineFont'>
                            I am Full Stack Developer by mind and runner by LEGS/HEART. Like to focus on clean, simple and understandable code/structure.
                            <br/>
                            React/Java are my current interests and development stack also, Redis is my go to No/SQL buddy.
                            <br/>
                            Have built projects from inception to deployment with minimum supervision.
                            <br/>
                            Now a days into tea and 1 cup of coffee/day with no sugar.
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Poke me on LinkedIn or StackOverflow or Email to chat.
                            <br/>
                        </Typography>
            </Grid>
        )
    }
}

export default withStyles(styles)(ShortTagLine)