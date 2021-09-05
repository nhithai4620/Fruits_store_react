import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../css/Home.css';
import OrangeSlice from "../assets/orange-slice.png";
import AppleControl from "../assets/apple_control.png";
import OrangeControl from "../assets/orange_control.png";
import BananaControl from "../assets/banana_control.png";
import StrawControl from "../assets/straw_control.png";
import {Link} from "react-router-dom";
import {DataContext} from '../Context';

export class Home extends React.Component{
    static contextType = DataContext;
    render(){
        const {products} = this.context;
      
            return (
              <div id="home">
                <div className="hero">

                  <div class="hero-overlay"></div>

                  <div class="bg"></div>

                  <div class="content">
                    <span className="sell-logan">Eat Fresh<br /> Stay Healthy...</span>
                    <p className="sell-content">Orange is not just a tasty fruit, its more. Get to know the multiple health benefits of adding oranges in your daily diet</p>
                    <button className="btn btn2">Buy Now</button>
                  </div>

                  <div className="right">
                    <img src={OrangeSlice}></img>
                  </div>

                  <div class="fruit-control">
                    <div className="fruit-control-item">
                      <img id="apple" src={AppleControl} alt />
                    </div>
                    <div className="fruit-control-item">
                      <img id="orange" src={OrangeControl} alt />
                    </div>
                    <div className="fruit-control-item">
                      <img id="banana" src={BananaControl} alt />
                    </div>
                    <div className="fruit-control-item">
                      <img id="straw" src={StrawControl} alt />
                    </div>
                  </div>

                </div> 
                {/* end class hero */}
              </div>
            );  
          } 
    }

export default Home;