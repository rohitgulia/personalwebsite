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
import { Header, Icon, Image, Button } from 'semantic-ui-react';

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
        color: theme.palette.text.secondary,
    }
});

class ContactMe extends React.Component {
    render() {
        const { classes } = this.props;
        return(
            <Grid className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h5" component="h2"> Get in touch </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center" xs={12} alignItems="flex-end">
                        <Button circular color='facebook' icon='facebook' href={"https://www.facebook.com/rohit.gulia.54"} target="_blank" size={'massive'}/>
                        <Button circular color='linkedin' icon='linkedin' href={"https://www.linkedin.com/in/rohitgulia"} target="_blank" size={'massive'}/>
                        <Button circular color='github' icon='github' href={"https://github.com/rohitgulia"} target="_blank" size={'massive'}/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ContactMe)