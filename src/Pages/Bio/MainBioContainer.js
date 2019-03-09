import React, {useState, useCallback} from 'react';
import Education from '../Bio/Education';
import Recommendation from '../Bio/Recommendation';
import WorkExperience from '../Bio/WorkExperience';
import TechnologiesUsed from '../Bio/TechnologiesUsed';
import ContactMe from '../Bio/ContactMe';
import Bio from '../Bio/Bio';
import { useTransition, animated, useSpring } from 'react-spring';
import Grid from '@material-ui/core/Grid';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Divider from '@material-ui/core/Divider';
import {isMobile} from 'react-device-detect';

const pages = [
    ({style}) => <animated.div style={{...style}}> <Bio></Bio> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <TechnologiesUsed></TechnologiesUsed> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <WorkExperience></WorkExperience> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <Recommendation></Recommendation> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <Education></Education> </animated.div>
]

class MainBioContainer extends React.Component {
    // const [index, set] = useState(0)
    // const onClick = useCallback(() => set(state => (state + 1) % 5), [])
    // const transitions = useTransition(index, p => p, {
    //     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    //     leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
    // })
    render() {
    return (
        <Parallax pages={isMobile ? 8: 6} ref={ref => this.parallax = ref}>
                <ParallaxLayer offset={0} speed={0.8} onClick={() => this.parallax.scrollTo(isMobile ? 2 : 1)}>
                    <Bio></Bio>
                </ParallaxLayer>
            <ParallaxLayer offset={3.5} speed={1} style={{ opacity: 0.5 }}>
                <img src={'/static/images/hosting.svg'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={'/static/images/night.svg'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>
                <ParallaxLayer offset={0.8} speed={1} style={{ opacity: 0.5 }}>
                    <img src={'/static/images/react.png'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={'/static/images/redux.png'} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={isMobile ? 2 : 1} speed={0.4} onClick={() => this.parallax.scrollTo(isMobile ? 3 :2)}>
                    <TechnologiesUsed></TechnologiesUsed>
                </ParallaxLayer>
                <ParallaxLayer offset={2.2} speed={1} style={{ opacity: 0.3 }}>
                    <img src={'/static/images/redux.png'} style={{ display: 'block', width: '30%', marginLeft: '65%' }} />
                    <img src={'/static/images/react.png'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={isMobile ? 3 : 2} speed={0.5} onClick={() => this.parallax.scrollTo(isMobile ? 6 :4)}>
                    <WorkExperience></WorkExperience>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1} style={{ opacity: 0.3 }}>
                    <img src={'/static/images/binary.png'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                    <img src={'/static/images/binary.png'} style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={4.5} speed={1} style={{ opacity: 0.5 }}>
                    <img src={'/static/images/java.png'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                    <img src={'/static/images/redis.png'} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={1.7} speed={1} style={{ opacity: 0.3 }}>
                    <img src={'/static/images/redis.png'} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
                    <img src={'/static/images/java.png'} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={isMobile ? 6 : 4} speed={0.2} onClick={() => this.parallax.scrollTo(isMobile ? 6.5 : 5)}>
                    <Recommendation></Recommendation>
                </ParallaxLayer>
                <ParallaxLayer offset={isMobile ? 6.5 : 5} speed={0.3} onClick={() => this.parallax.scrollTo(isMobile ? 8 : 6)}>
                    <Education></Education>
                </ParallaxLayer>
                <ParallaxLayer offset={isMobile ? 8 : 6} speed={-0.4} onClick={() => this.parallax.scrollTo(0)}>
                    <Divider/>
                    <br/>
                    <ContactMe></ContactMe>
                </ParallaxLayer>
        </Parallax>


        // <div className="containerDiv" onClick={onClick}>
        //     {transitions.map(({ item, props, key }) => {
        //         const Page = pages[item]
        //         return <Page key={key} style={props} />
        //     })}
        // </div>
        // <Grid className="containerDiv">
        //     <Bio></Bio>
    
        //     <TechnologiesUsed></TechnologiesUsed>
        //     <WorkExperience></WorkExperience>
        //     <Recommendation></Recommendation>
        //     <Education></Education>
        // </Grid>
      );
    }
}

export default MainBioContainer