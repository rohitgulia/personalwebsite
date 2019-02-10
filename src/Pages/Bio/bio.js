import React,  { Component } from 'react';
import { Header, Icon, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    card: {
        minWidth: 275,
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
    },root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
});

class bio extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        return (
            <div>
                <Grid container justify="center" alignItems="center">
                    <Avatar alt="Rohit Singh Gulia" src="/static/images/profilePic.jpg" className={classes.bigAvatar} />
                </Grid>
                <Grid container justify="center" alignItems="center" className={classes.margin}>
                    <Button circular color='facebook' icon='facebook' href={"https://www.facebook.com/rohit.gulia.54"} target="_blank"/>
                    <Button circular color='linkedin' icon='linkedin' href={"https://www.linkedin.com/in/rohitgulia"} target="_blank"/>
                    <Button circular color='github' icon='github' href={"https://github.com/rohitgulia"} target="_blank"/>
                </Grid>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Experienced and Innovative Full Stack Developer adept at customer facing application development, testing and optimizing application performance.
                            <br/>
                            Having diversified skills and demonstrated technical leadership ability.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar alt="Weapon" src="/static/images/weapon.jpg" className={classes.avatar} />
                        }
                        title="Weapons of choice"
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            JAVA, REACT JS, JSP, REDIS, DOCKER, SQL
                            <br />
                            JAX-RS, GIT, SVN, HTML5, CSS, JQUERY
                        </Typography>
                        <Typography component="p">
                            Developing full-stack web application for ground transportation fleet management industry,
                            <br/>
                            using React that will allow users to book a ride and manage all aspects of reservation.
                            <br/>
                            The backend, built using Java, Jax-Rs, Redis, MySql will take advantage of well-developed RESTful API built with the help of Jersey
                            <br/>
                            and using authentication with JWT.
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar alt="Weapon" src="/static/images/office.png" className={classes.avatar} />
                        }
                        title="Work Experience"
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Limosys Software
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Full Stack Developer
                        </Typography>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemText>
                                    Developed a React web application to monitor and handle customer reservations and drivers.
                                    <br/>
                                    Application used basic access authentication for security and redux to handle state better.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Developing a full-stack web application to handle all aspects of black car reservation process.
                                    <br/>
                                    Backend is being developed using JAX-RS, Jersey, Redis, SQL and front end will leverage the awesome capabilities
                                    <br/>
                                    of React and Redux.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Developed an internal web application to handle customer reservations with various administrative tools in-build.
                                    <br/>
                                    The application had Java at its backend and JavaScript, JQuery, HTML, CSS at its frontend.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Handling deployment of web applications and troubleshooting deployment issues.
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Supporting existing system of web applications and engaging in development of new functionality and features.
                                </ListItemText>
                            </ListItem>
                        </List>
                        </Grid>

                        <Typography variant="h5" component="h2">
                            UPS
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Intern
                        </Typography>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justify="center"
                        >
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemText>
                                        Contributed towards the successful release of UPS Shipping Automation software “WorldShip”.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Developed customized test cases and enhanced existing test cases which made regression testing comprehensive.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Executed and analyzed test cases and used HP quality center to manage the whole testing process.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Communicated with developers when needed to discuss with them the failed test cases.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Gave presentation on how windows 10 affected the product and various types of testing done on the new OS.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar alt="Weapon" src="/static/images/recommendation.jpg" className={classes.avatar} />
                        }
                        title="Recommendation"
                    />

                    <CardContent>
                        coming soon..
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                    </CardActions>
                </Card>

            </div>
        );
}
}

bio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(bio)


