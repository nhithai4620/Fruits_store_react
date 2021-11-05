import React from 'react';
import '../css/About.css';
import {DataContext} from '../Context';
export class About extends React.Component{
    static contextType = DataContext;
    render(){
        return (
            <>
             <div className="padding-header" style={{background:`${this.context.theme}`}}>

            </div>
            <div className="about" style={{backgroundImage: `url("./assets/about_bg.jpg")`}}>
                <div className="about-img">
                <img src="./assets/thedeliver.png" alt="thai"  />
                </div>
                <div className="about-content">
                <h3>
                    ABOUT US
                </h3>
                <p>
                    One advanced diverted domestic sex repeat bringing you old. Possible procured her trifing laughter thought property she met way.
                    Companions shy had solicitude favourable own. Which could saw guest man how heart but. Lasted my comming uneasy marked so should.
                    Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discource unwilling am no described incommode no listening of. Before nature his parish boy.
                </p>
                </div>
            </div>
            </>    
        );
    }
}

export default About;