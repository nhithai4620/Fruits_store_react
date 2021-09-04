import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import '../css/Home.css';
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
                    
                </div>
              </div>
            );  
          } 
    }

export default Home;