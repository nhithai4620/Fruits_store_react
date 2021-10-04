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
            <div className="about" id="about">
                <h3>Welcome customer!</h3>
                <p> This website is created by Nguyễn Nhĩ Thái</p>
                <p> I am a student of Cần Thơ university</p>
                <p> This is a ecommerce website project which I created when I was learning the basic academic subject</p>
            </div>    
            </>    
        );
    }
}

export default About;