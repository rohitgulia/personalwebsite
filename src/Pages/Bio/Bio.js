import React,  { Component } from 'react';
import { Header, Icon, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Reveal } from 'semantic-ui-react';
import { Parallax } from 'react-scroll-parallax';
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 5px',
        transform: 'scale(2.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    margin: {
        marginBottom: 10
    },
    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    extraPadding: {
        paddingLeft: 50,
        paddingRight: 50
    },
    customPaddingAtBottom: {
        paddingBottom: 100
    }
});

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Bio extends Component {
    state = { expanded: false };
    render() {
        const { classes } = this.props;
        const isSlower = getRandomInt(0, 1) ? true : false;
        const offset = getRandomInt(50, 150);
        //const props = useSpring({from: {opacity: 0, marginTop: -1000}, to:{opacity: 1, marginTop: 0},delay: 1000 })
        return (
            <useSpring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
            <div>
                <Grid container spacing={12}>
                <Grid container justify="center" alignItems="center" className={'headerFont'} xs={12}>
                    Rohit
                </Grid>
                    <Grid container justify="center" alignItems="center" className={'headerFont'} xs={12}>
                        Gulia
                    </Grid>
                    <Grid container justify="center" alignItems="center" className={classes.customPaddingAtBottom} xs={12}></Grid>
                <Grid container justify="center" alignItems="center" xs={12} className={classes.customHeight}>
                    <Reveal animated='rotate'>
                        <Reveal.Content visible>
                            <Avatar alt="Rohit Singh Gulia" src="/static/images/profilePic.jpg" className={classes.bigAvatar} />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Avatar alt="Rohit Singh Gulia" src="/static/images/race3.jpg" className={classes.bigAvatar} />
                        </Reveal.Content>
                    </Reveal>
                </Grid>
                <Grid container justify="center" alignItems="center" className={classes.margin} xs={12} alignItems="flex-end">
                    <Button circular color='facebook' icon='facebook' href={"https://www.facebook.com/rohit.gulia.54"} target="_blank"/>
                    <Button circular color='linkedin' icon='linkedin' href={"https://www.linkedin.com/in/rohitgulia"} target="_blank"/>
                    <Button circular color='github' icon='github' href={"https://github.com/rohitgulia"} target="_blank"/>
                </Grid>
                    <Grid>
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
                </Grid>
            </div>
            </useSpring>
        );
}
}

Bio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Bio)


