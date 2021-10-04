import React from 'react';
import '../css/Contact.css';
import {DataContext} from '../Context';
export class Contact extends React.Component{
    static contextType = DataContext;
    render(){
        var color = this.context.theme;
        var Bg = "../assets/apple_bg.png";
        if (color == "orange"){
          Bg = "../assets/orange_bg.png";
        } else if (color == "yellow"){
          Bg = "../assets/banana_bg.png";
        } else if (color == "#42cc14"){
          Bg = "../assets/apple_bg.png";
        } else if (color == "#ff4000"){
          Bg = "../assets/straw_bg.png";
        }
        return (
            <>
            <div className="padding-header" style={{background:`${this.context.theme}`}}>

            </div>
             
            <div className="contact"  style={{backgroundImage: `url(${Bg})`}}>
                <div className="contact-text" id="contact">
                <h1>Contact</h1>
                Want to work together?  Get in touch!
                </div>
                <div className="contact-form" id="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" /><br />
                        <input type="text" placeholder="Your Email" /><br />
                        <textarea placeholder="Questions?"></textarea><br />
                        <input type="submit" value="Submit" className="button"/>
                    </form>
                </div>
                </div>
            </>      
        );
    }
}

export default Contact;