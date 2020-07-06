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
import { Reveal } from 'semantic-ui-react';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { Parallax } from 'react-scroll-parallax';

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
        maxWidth: 500
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
    fontSize: {
        fontSize: 20
    }
});

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class MobileBio extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    render() {
        const { classes } = this.props;
        const isSlower = getRandomInt(0, 1) ? true : false;
        const offset = getRandomInt(50, 150);
        return (
            <div>
                <Grid container justify="center" alignItems="center">

                    <Reveal animated='rotate'>
                        <Reveal.Content visible>
                            <Avatar alt="Rohit Singh Gulia" src="/personalwebsite/static/images/profilePic.jpg" className={classes.bigAvatar} />
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Avatar alt="Rohit Singh Gulia" src="/personalwebsite/static/images/race3.jpg" className={classes.bigAvatar} />
                        </Reveal.Content>
                    </Reveal>
                </Grid>
                <Grid container justify="center" alignItems="center" className={classes.margin}>
                    <Button circular color='facebook' icon='facebook' href={"https://www.facebook.com/rohit.gulia.54"} target="_blank"/>
                    <Button circular color='linkedin' icon='linkedin' href={"https://www.linkedin.com/in/rohitgulia"} target="_blank"/>
                    <Button circular color='github' icon='github' href={"https://github.com/rohitgulia"} target="_blank"/>
                </Grid>

                <Grid container justify="center" alignItems="center">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                I am Full Stack Developer by mind and runner by LEGS/HEART. Like to focus on clean, simple and understandable code/structure.
                                NodeJS/React are my current interests and development stack also.
                                Have built projects from inception to deployment with minimum supervision.
                                Now a days into tea and 1 cup of coffee/day with no sugar.
                                <br/>
                                <br/>
                                Poke me on <Link href={'https://www.linkedin.com/in/rohitgulia'} target="_blank" rel="noopener"> LinkedIn </Link> or  <Link href={'https://stackexchange.com/users/7020577/novice-js'} target="_blank" rel="noopener"> StackOverflow </Link> to chat.
                                <br/>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid container justify="center" alignItems="center">
                    <Card className={classes.card}>
                        <Parallax
                            className="form"
                            offsetYMin={'-20px'}
                            offsetYMax={'20px'}
                            slowerScrollRate={isSlower}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar alt="Weapon" src="/personalwebsite/static/images/weapon.jpg" className={classes.avatar} />
                                }
                                title="Weapons of choice"
                            />
                        </Parallax>

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
                </Grid>

                <Grid container justify="center" alignItems="center">
                    <Card className={classes.card}>
                        <Parallax
                            className="form"
                            offsetYMin={'-20px'}
                            offsetYMax={'20px'}
                            slowerScrollRate={isSlower}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar alt="Weapon" src="/personalwebsite/static/images/office.png" className={classes.avatar} />
                                }
                                title="Work Experience"
                            />
                        </Parallax>

                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Limosys Software
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Full Stack Developer (2016 - Current)
                            </Typography>
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >
                                <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Developed a React web application to monitor and handle customer reservations and drivers.
                                            <br/>
                                            Application used basic access authentication for security and redux to handle state better.
                                </Typography>

                                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Developing a full-stack web application to handle all aspects of black car reservation process.
                                            <br/>
                                            Backend is being developed using JAX-RS, Jersey, Redis, SQL and front end will leverage the awesome capabilities
                                            <br/>
                                            of React and Redux.
                                            </Typography>

                                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Developed an internal web application to handle customer reservations with various administrative tools in-build.
                                            <br/>
                                            The application had Java at its backend and JavaScript, JQuery, HTML, CSS at its frontend.
                                            </Typography>

                                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                                Handling deployment of web applications and troubleshooting deployment issues.
                                            </Typography>

                                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                                Supporting existing system of web applications and engaging in development of new functionality and features.
                                            </Typography>
                            </Grid>

                            <br/>
                            <br/>

                            <Typography variant="h5" component="h2">
                                UPS
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Intern (2015-2016)
                            </Typography>
                            <Grid
                                container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center"
                            >

                                    <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Contributed towards the successful release of UPS Shipping Automation software “WorldShip”.
                                    </Typography>

                                    <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                        Developed customized test cases and enhanced existing test cases which made regression testing comprehensive.
                                    </Typography>

                                    <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Executed and analyzed test cases and used HP quality center to manage the whole testing process.
                                    </Typography>

                                    <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Communicated with developers when needed to discuss with them the failed test cases.
                                    </Typography>

                                    <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                            Gave presentation on how windows 10 affected the product and various types of testing done on the new OS.
                                    </Typography>
                            </Grid>
                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid container justify="center" alignItems="center">
                    <Card className={classes.card}>
                        <Parallax
                            className="form"
                            offsetYMin={'-20px'}
                            offsetYMax={'20px'}
                            slowerScrollRate={isSlower}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar alt="Weapon" src="/personalwebsite/static/images/recommendation.jpg" className={classes.avatar} />
                                }
                                title="Testimonial"
                            />
                        </Parallax>

                        <CardContent>
                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                Rohit and I collaborative very closely while I was at limosys and were able to establish a thorough communications management
                                plan with major stakeholders to ensure project success and client satisfaction. Rohit also touched on and completed many ad HOC
                                projects with little to no supervision’s and was truly an asset to our development team. I wish him the best and hope we can work
                                again in the future. He is truly divine to work with and a true team player on any team.
                            </Typography>
                            <Link href={'https://www.linkedin.com/in/davidcampodonico/'} className={classes.link} target="_blank" rel="noopener"> - David Campodonico, MBA </Link>

                            <br/>
                            <Divider />
                            <br/>

                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                It was a pleasure having Rohit work on my team. He has a strong work ethic and was a great team player.
                                He played a major role with testing a software application to make sure it was compatible with the new Windows 10 operating system.
                                He also provided technical assistance for the entire QA testing team.
                            </Typography>
                            <Link href={'https://www.linkedin.com/in/lisa-thomas-66b68962/'} className={classes.link} target="_blank" rel="noopener">  - Lisa Thomas </Link>

                            <br/>
                            <Divider />
                            <br/>

                            <Typography variant="body1" gutterBottom className={classes.fontSize}>
                                I had the pleasure of working with Rohit at UPS. I was particularly impressed by Rohit’s ability to handle even the toughest assignments—and effortlessly.
                                At UPS, WorldShip is a very complex application and it takes months to develop the level of skills that Rohit developed within a very short period of time.
                                During very stressful testing period, I could always count on Rohit to complete his assigned tasks and even ask for more assignments! Rohit earns my highest recommendation.
                            </Typography>
                            <Link href={'https://www.linkedin.com/in/anamul-hasan-107b6643/'} className={classes.link} target="_blank" rel="noopener"> - Anamul Hasan </Link>


                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid container justify="center" alignItems="center">
                    <Card className={classes.card}>
                        <Parallax
                            className="form"
                            offsetYMin={'-20px'}
                            offsetYMax={'20px'}
                            slowerScrollRate={isSlower}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar alt="Weapon" src="/personalwebsite/static/images/education.png" className={classes.avatar} />
                                }
                                title="Education"
                            />
                        </Parallax>

                        <CardContent className={classes.extraPadding}>
                            <Typography component="p">
                                Masters of Science in Computer Science - New Jersey Institute of Technology
                            </Typography>
                            <br/>
                            <Divider />
                            <br/>
                            <Typography component="p">
                                Bachelor of Engineering in Computer Engineering - Pune University
                            </Typography>

                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>
                        </CardActions>
                    </Card>
                </Grid>

            </div>
        );
    }
}

MobileBio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileBio)