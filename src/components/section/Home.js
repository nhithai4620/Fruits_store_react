import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../css/Home.css';
import OrangeSlice from "../assets/orange-slice.png";
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
                    <Link className="btn btn2">Buy Now</Link>
                  </div>
                  <div className="right">
                    <img src={OrangeSlice}></img>
                  </div>
                  <div class="icon">
                    <a href="#"><i class="fas fa-share-alt"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
                </div>
              </div>
            );  
          } 
    }

export default Home;