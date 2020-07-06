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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    avatar: {
        margin: 10,
    },
    avatar: {
        margin: 10,
    },
    root: {
        flexGrow: 1,
    },
    title: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#2a8486 !important',
        textDecorationLine: 'underline'
    }
});


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class WorkExperience extends Component {
    render() {
        const { classes } = this.props;
        const isSlower = getRandomInt(0, 1) ? true : false;
        const offset = getRandomInt(50, 150);
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h4" component="h1"> Work Experience </Typography>
                    </Grid>

                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h5" component="h2" className="appDataFont">
                            Vivint Solar
                            <br />
                            Full Stack Developer (2019-Current)
                        </Typography>
                    </Grid>

                    <Grid item xs={12} className="appDataFont">
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemText>
                                        Analyze user needs and software requirements to determine feasibility of design within time and cost constraints.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Working on Iot devices which collects data from Solar panel and gives overview of the overall energy production from system.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Creating new functionalities to enhance React Dashboard usability.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Creating AWS Lambdas and api endpoints to be consumed by the dashboard.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Handled payment module for e-commerce web application.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Updating and maintaining microservices used for client web application.
                                    </ListItemText>
                                </ListItem>
                            </List>
                    </Grid>

                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h5" component="h2" className="appDataFont">
                            Limosys Software
                            <br />
                            Full Stack Developer (2016 - 2019)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} alignItems="center" justify="center">
                        <Typography component="p" className="appDataFont">
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
                                        Developed a full-stack web application to handle all aspects of black car reservation process.
                                        <br/>
                                        Backend was being developed using JAX-RS, Jersey, Redis, SQL and front end used
                                        <br/>
                                        React and Redux.
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
                                        Handled deployment of web applications and troubleshoot deployment issues.
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Typography>
                    </Grid>

                </Grid>

            </div>

            //     <Grid container justify="center" alignItems="center">
            //     <Card className={classes.card}>
            //         <Parallax
            //             className="form"
            //             offsetYMin={'-20px'}
            //             offsetYMax={'20px'}
            //             slowerScrollRate={isSlower}
            //         >
            //             <CardHeader
            //                 avatar={
            //                     <Avatar alt="Weapon" src="/personalwebsite/static/images/office.png" className={classes.avatar} />
            //                 }
            //                 title="Work Experience"
            //             />
            //         </Parallax>
            //
            //         <CardContent>
            //             <Typography variant="h5" component="h2">
            //                 Limosys Software
            //             </Typography>
            //             <Typography className={classes.pos} color="textSecondary">
            //                 Full Stack Developer (2016 - Current)
            //             </Typography>
            //             <Grid
            //                 container
            //                 spacing={0}
            //                 direction="column"
            //                 alignItems="center"
            //                 justify="center"
            //             >
            //                 <List className={classes.root}>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Developed a React web application to monitor and handle customer reservations and drivers.
            //                             <br/>
            //                             Application used basic access authentication for security and redux to handle state better.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Developing a full-stack web application to handle all aspects of black car reservation process.
            //                             <br/>
            //                             Backend is being developed using JAX-RS, Jersey, Redis, SQL and front end will leverage the awesome capabilities
            //                             <br/>
            //                             of React and Redux.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Developed an internal web application to handle customer reservations with various administrative tools in-build.
            //                             <br/>
            //                             The application had Java at its backend and JavaScript, JQuery, HTML, CSS at its frontend.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Handling deployment of web applications and troubleshooting deployment issues.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Supporting existing system of web applications and engaging in development of new functionality and features.
            //                         </ListItemText>
            //                     </ListItem>
            //                 </List>
            //             </Grid>
            //
            //             <Typography variant="h5" component="h2">
            //                 UPS
            //             </Typography>
            //             <Typography className={classes.pos} color="textSecondary">
            //                 Intern (2015-2016)
            //             </Typography>
            //             <Grid
            //                 container
            //                 spacing={0}
            //                 direction="column"
            //                 alignItems="center"
            //                 justify="center"
            //             >
            //                 <List className={classes.root}>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Contributed towards the successful release of UPS Shipping Automation software “WorldShip”.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Developed customized test cases and enhanced existing test cases which made regression testing comprehensive.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Executed and analyzed test cases and used HP quality center to manage the whole testing process.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Communicated with developers when needed to discuss with them the failed test cases.
            //                         </ListItemText>
            //                     </ListItem>
            //                     <ListItem>
            //                         <ListItemText>
            //                             Gave presentation on how windows 10 affected the product and various types of testing done on the new OS.
            //                         </ListItemText>
            //                     </ListItem>
            //                 </List>
            //             </Grid>
            //         </CardContent>
            //         <CardActions className={classes.actions} disableActionSpacing>
            //         </CardActions>
            //     </Card>
            // </Grid>
        )
    }
}

export default withStyles(styles)(WorkExperience)
