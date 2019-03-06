import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const recommendations = [
    {
        label: <Link href={'https://www.linkedin.com/in/davidcampodonico/'} target="_blank" rel="noopener"> - David Campodonico, MBA </Link>,
        recommendation:
        'Rohit and I collaborative very closely while I was at limosys and were able to establish a thorough communications management\n' +
        '                            plan with major stakeholders to ensure project success and client satisfaction. Rohit also touched on and completed many ad HOC\n' +
        '                            projects with little to no supervision’s and was truly an asset to our development team. I wish him the best and hope we can work\n' +
        '                            again in the future. He is truly divine to work with and a true team player on any team.',
    },
    {
        label: <Link href={'https://www.linkedin.com/in/lisa-thomas-66b68962/'} target="_blank" rel="noopener">  - Lisa Thomas </Link>,
        recommendation:
        'It was a pleasure having Rohit work on my team. He has a strong work ethic and was a great team player.\n' +
        '                            He played a major role with testing a software application to make sure it was compatible with the new Windows 10 operating system.\n' +
        '                            He also provided technical assistance for the entire QA testing team.',
    },
    {
        label: <Link href={'https://www.linkedin.com/in/anamul-hasan-107b6643/'} target="_blank" rel="noopener"> - Anamul Hasan </Link>,
        recommendation:
        'I had the pleasure of working with Rohit at UPS. I was particularly impressed by Rohit’s ability to handle even the toughest assignments—and effortlessly.\n' +
        '                            At UPS, WorldShip is a very complex application and it takes months to develop the level of skills that Rohit developed within a very short period of time.\n' +
        '                            During very stressful testing period, I could always count on Rohit to complete his assigned tasks and even ask for more assignments! Rohit earns my highest recommendation.',
    }
];

const styles = theme => ({
    root: {
        maxWidth: '100%',
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    title: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});

class Recommendation extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = recommendations.length;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.title}>
                        <Typography variant="h5" component="h2"> Recommendations </Typography>
                    </Grid>
                    <Grid item xs={12}>
                            <Paper square elevation={0} className={classes.header}>
                                <Typography>{recommendations[activeStep].label}</Typography>
                            </Paper>
                            <Typography className="appDataFont">{recommendations[activeStep].recommendation}</Typography>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                className={classes.mobileStepper}
                                nextButton={
                                    <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                        Next
                                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                        Back
                                    </Button>
                                }
                            />
                    </Grid>
                </Grid>

            </div>
        );
    }
}

Recommendation.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Recommendation);



