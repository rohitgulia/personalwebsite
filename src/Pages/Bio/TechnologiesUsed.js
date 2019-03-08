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
        color: '#2a8486',
        textDecorationLine: 'underline'
    }
});


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class TechnologiesUsed extends Component {

    render() {
        const { classes } = this.props;
        const isSlower = getRandomInt(0, 1) ? true : false;
        const offset = getRandomInt(50, 150);
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h4" component="h1"> Weapons of choice </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h5" component="h2" className="appDataFont">
                            JAVA, REACT JS, JSP, REDIS, DOCKER, SQL
                            <br />
                            JAX-RS, GIT, SVN, HTML5, CSS, JQUERY
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="p" className="appDataFont">
                            Developing full-stack web application for ground transportation fleet management industry,
                            using React that will allow users to book a ride and manage all aspects of reservation.
                            The backend, built using Java, Jax-Rs, Redis, MySql will take advantage of well-developed RESTful API built with the help of Jersey
                            and using authentication with JWT.
                        </Typography>
                    </Grid>
                </Grid>


                {/*<Card className={classes.card}>*/}
                    {/*<Parallax*/}
                        {/*className="form"*/}
                        {/*offsetYMin={'-20px'}*/}
                        {/*offsetYMax={'20px'}*/}
                        {/*slowerScrollRate={isSlower}*/}
                    {/*>*/}
                        {/*<CardHeader*/}
                            {/*avatar={*/}
                                {/*<Avatar alt="Weapon" src="/personalwebsite/static/images/weapon.jpg" className={classes.avatar} />*/}
                            {/*}*/}
                            {/*title="Weapons of choice"*/}
                        {/*/>*/}
                    {/*</Parallax>*/}

                    {/*<CardContent>*/}
                        {/**/}
                    {/*</CardContent>*/}
                    {/*<CardActions className={classes.actions} disableActionSpacing>*/}
                    {/*</CardActions>*/}
                {/*</Card>*/}
            </div>
        )
    }
}

export default withStyles(styles)(TechnologiesUsed)