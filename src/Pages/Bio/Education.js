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
        )
    }
}

export default withStyles(styles)(Education)