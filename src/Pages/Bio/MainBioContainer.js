import React, {useState, useCallback} from 'react';
import Education from '../Bio/Education';
import Recommendation from '../Bio/Recommendation';
import WorkExperience from '../Bio/WorkExperience';
import TechnologiesUsed from '../Bio/TechnologiesUsed';
import ContactMe from '../Bio/ContactMe';
import Bio from '../Bio/Bio';
import MobileBio from '../Bio/MobileBio';
import { useTransition, animated, useSpring } from 'react-spring';
import Grid from '@material-ui/core/Grid';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Divider from '@material-ui/core/Divider';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";


class MainBioContainer extends React.Component {
    render() {
    return (
        <Grid>
        <BrowserView>
            <Parallax pages={6} ref={ref => this.parallax = ref}>
                <ParallaxLayer offset={0} speed={0.8} onClick={() => this.parallax.scrollTo(1)}>
                    <Bio></Bio>
                </ParallaxLayer>
                <ParallaxLayer offset={3.5} speed={1} style={{ opacity: 0.5 }}>
                    <img src={'/personalwebsite/static/images/hosting.svg'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={'/personalwebsite/static/images/night.svg'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={1} style={{ opacity: 0.5 }}>
                    <img src={'/personalwebsite/static/images/react.png'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={'/personalwebsite/static/images/redux.png'} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.4} onClick={() => this.parallax.scrollTo(2)}>
                    <TechnologiesUsed></TechnologiesUsed>
                </ParallaxLayer>
                <ParallaxLayer offset={2.2} speed={1} style={{ opacity: 0.3 }}>
                    <img src={'/personalwebsite/static/images/redux.png'} style={{ display: 'block', width: '30%', marginLeft: '65%' }} />
                    <img src={'/personalwebsite/static/images/react.png'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.5} onClick={() => this.parallax.scrollTo(4)}>
                    <WorkExperience></WorkExperience>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1} style={{ opacity: 0.3 }}>
                    <img src={'/personalwebsite/static/images/binary.png'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={'/personalwebsite/static/images/binary.png'} style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={4.5} speed={1} style={{ opacity: 0.5 }}>
                    <img src={'/personalwebsite/static/images/java.png'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                    <img src={'/personalwebsite/static/images/redis.png'} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={1.7} speed={1} style={{ opacity: 0.3 }}>
                    <img src={'/personalwebsite/static/images/redis.png'} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
                    <img src={'/personalwebsite/static/images/java.png'} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.2} onClick={() => this.parallax.scrollTo(5)}>
                    <Recommendation></Recommendation>
                </ParallaxLayer>
                <ParallaxLayer offset={5} speed={0.3} onClick={() => this.parallax.scrollTo(6)}>
                    <Education></Education>
                </ParallaxLayer>
                <ParallaxLayer offset={6} speed={-0.4} onClick={() => this.parallax.scrollTo(0)}>
                    <Divider/>
                    <br/>
                    <ContactMe></ContactMe>
                </ParallaxLayer>
            </Parallax>
        </BrowserView>
        <MobileView>
            <MobileBio></MobileBio>
        </MobileView>
        </Grid>
      );
    }
}

export default MainBioContainer