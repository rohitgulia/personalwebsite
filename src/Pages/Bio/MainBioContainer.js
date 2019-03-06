import React, {useState, useCallback} from 'react';
import Education from '../Bio/Education';
import Recommendation from '../Bio/Recommendation';
import WorkExperience from '../Bio/WorkExperience';
import TechnologiesUsed from '../Bio/TechnologiesUsed';
import ShortTagLine from '../Bio/ShortTagLine';
import Bio from '../Bio/Bio';
import { useTransition, animated } from 'react-spring';

const pages = [
    ({style}) => <animated.div style={{...style}}> <Bio></Bio> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <TechnologiesUsed></TechnologiesUsed> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <WorkExperience></WorkExperience> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <Recommendation></Recommendation> </animated.div>,
    ({style}) => <animated.div style={{...style}}> <Education></Education> </animated.div>
]

export default function MainBioContainer() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 5), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
    })
    return (
        <div className="containerDiv" onClick={onClick}>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} />
            })}
        </div>
    // return (
    //     <div className="containerDiv">
    //         <Bio></Bio>
    //
    //         <TechnologiesUsed></TechnologiesUsed>
    //         <WorkExperience></WorkExperience>
    //         <Recommendation></Recommendation>
    //         <Education></Education>
    //     </div>
    //     );
     );
}