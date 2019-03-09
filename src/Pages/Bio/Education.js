import React,  { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";
import CardHeader from '@material-ui/core/CardHeader';
import { Parallax } from 'react-scroll-parallax';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    avatar: {
        margin: 10,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#2a8486'
    }
});


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Education extends Component {
    render() {
        const { classes } = this.props;
        const isSlower = getRandomInt(0, 1) ? true : false;
        const offset = getRandomInt(50, 150);
        return (
            <Grid className={classes.root}>
                <Grid container spacing={24}>
                     <Grid item xs={12} className={classes.title}>
                        <Typography variant="h4" component="h1"> Education </Typography>
                    </Grid>
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Typography component="p" className="appDataFont">
                            Masters of Science in Computer Science - New Jersey Institute of Technology
                        </Typography>
                        <br/>
                        <Typography component="p" className="appDataFont">
                            Bachelor of Engineering in Computer Engineering - Pune University
                        </Typography>
                </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Education)