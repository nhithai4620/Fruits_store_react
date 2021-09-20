import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../css/Home.css';
import OrangeSlice from "../assets/orange-slice.png";
import AppleSlice from "../assets/apple-slice.png";
import AppleControl from "../assets/apple_control.png";
import OrangeControl from "../assets/orange_control.png";
import BananaControl from "../assets/banana_control.png";
import StrawControl from "../assets/straw_control.png";
import OrangeBg from "../assets/orange_bg.png";
import AppleBg from "../assets/apple_bg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';

export class Home extends React.Component{
    static contextType = DataContext;
    state = {
      theme_bg : this.context.theme.theme_bg,
      theme_color : this.context.theme.theme_color,
      theme_img : this.context.theme.theme_img
    }


    render(){  
        return (
          <div id="home">
            <div className="hero" style={{
                backgroundImage: `url(${this.state.theme_bg})` 
              }}>

              <div className="hero-overlay"></div>

              <div className="bg" style={{
                backgroundColor: `${this.state.theme_color}`
              }}>
              </div>

              <div className="content">
                <span className="sell-logan">Eat Fresh<br /> Stay Healthy...</span>
                <p className="sell-content">Orange is not just a tasty fruit, its more. Get to know the multiple health benefits of adding oranges in your daily diet</p>
                <button className="btn btn2">Buy now</button>
              </div>

              <div className="right">
                <img src={this.state.theme_img}></img>
              </div>

              <div className="fruit-control">
                <div className="fruit-control-item">
                  <img id="apple" src={AppleControl} onClick={(e) => this.context.handleTheme(e,"green")} />
                </div>
                <div className="fruit-control-item">
                  <img id="orange" src={OrangeControl} onClick={(e) => this.context.handleTheme(e,"orange")} />
                </div>
                <div className="fruit-control-item">
                  <img id="banana" src={BananaControl} onClick={(e) => this.context.handleTheme(e,"yellow")}/>
                </div>
                <div className="fruit-control-item">
                  <img id="straw" src={StrawControl}  onClick={(e) => this.context.handleTheme(e,"red")}/>
                </div>
              </div>

            </div> 
            {/* end class hero */}
            <div className="main-container">
                <div className="service-info">
                  <ul>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:"orange",borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid orange"}} icon={faShippingFast} />
                      </Link>  
                      <h3>FREE SHIPPING</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:"orange",borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid orange"}} icon={faExchangeAlt} />
                      </Link>  
                      <h3>EASY RETURN</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:"orange",borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid orange"}} icon={faShieldAlt} />
                      </Link>  
                      <h3>SECURE PAYMENT</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:"orange",borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid orange"}} icon={faHouseUser} />
                      </Link> 
                      <h3>24/7 SUPPORT</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                  </ul>
                </div>
              {/* end of class service infor */}
            </div>

            {/* end of class main-container */}
          </div>
        );  
      } 
    }

export default Home;