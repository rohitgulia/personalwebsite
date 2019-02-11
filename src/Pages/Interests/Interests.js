import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import { Image, Reveal } from 'semantic-ui-react';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    link: {
        margin: theme.spacing.unit,
    },
});

class Interests extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes } = this.props;
        const { expanded } = this.state;

        return (
            <div className={classes.root}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Hayden's Heart (5k) (New Jersey)</Typography>
                        <Typography className={classes.secondaryHeading}> 2018 </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <Link href={'http://www.haydensheart.com/'} className={classes.link} target="_blank" rel="noopener"> Hayden's Heart Info </Link>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>North face endurance challenge (10k) (New York)</Typography>
                        <Typography className={classes.secondaryHeading}>
                            2018
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Reveal animated='move right'>
                            <Reveal.Content visible>
                                <Image src='/personalwebsite/static/images/race1.jpg' size='small' />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src='/personalwebsite/static/images/race2.jpg' size='small' />
                            </Reveal.Content>
                        </Reveal>
                        <Typography>
                            <Link href={'https://www.thenorthface.com/get-outdoors/endurance-challenge/new-york.html/'} className={classes.link} target="_blank" rel="noopener"> North face endurance challenge Info </Link>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}> Quadzilla (15k) (Pennsylvania)</Typography>
                        <Typography className={classes.secondaryHeading}>
                            2018
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <Link href={'http://quadzilla15k.com/'} className={classes.link} target="_blank" rel="noopener"> Quadzilla Info </Link>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}> The lantern run (Half marathon)(New York)</Typography>
                        <Typography className={classes.secondaryHeading}>
                            2018
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <Link href={'http://thelanternrun.com/'} className={classes.link} target="_blank" rel="noopener"> Lantern run Info </Link>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

Interests.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Interests);