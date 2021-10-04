import React from 'react';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import '../css/Home.css';
import AppleControl from "../assets/apple_control.png";
import OrangeControl from "../assets/orange_control.png";
import BananaControl from "../assets/banana_control.png";
import StrawControl from "../assets/straw_control.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export class Home extends React.Component{
    static contextType = DataContext;

    render(){
        const {products} = this.context;
        const responsive = {
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };

        var color = this.context.theme;
        var Bg = "../assets/apple_bg.png";
        var Img = "../assets/apple-slice.png";
        var colorImg = "../assets/back1.png";

        if (color == "orange"){
          Bg = "../assets/orange_bg.png";
          Img = "../assets/orange-slice.png";
          colorImg = "../assets/back1.png";
        } else if (color == "yellow"){
          Bg = "../assets/banana_bg.png";
          Img = "../assets/banana-slice.png";
          colorImg = "../assets/back2.png";
        } else if (color == "#42cc14"){
          Bg = "../assets/apple_bg.png";
          Img = "../assets/apple-slice.png";
          colorImg = "../assets/back3.png";
        } else if (color == "#ff4000"){
          Bg = "../assets/straw_bg.png";
          Img = "../assets/straw-slice.png";
          colorImg = "../assets/back.png";
        }
     
        return (
          <div id="home">
            <div className="hero" 
            style={{
                backgroundImage: `url(${Bg})` 
              }}
              >
              <div className="hero-overlay"></div>
              <div className="bg" style={{
                backgroundColor: `${this.context.theme}`
              }}>
              </div>

              <div className="content" >
                <span className="sell-logan" style={{color:`${color}`}}>Eat Fresh<br /> Stay Healthy...</span>
                <p className="sell-content" style={{color:`${color}`}}>Orange is not just a tasty fruit, its more. Get to know the multiple health benefits of adding oranges in your daily diet</p>
                <button className="btn btn2" style={{backgroundColor:`${color}`}}>Buy now</button>
              </div>

              <div className="right">
                <img 
                  src={Img}
                ></img>
              </div>

              <div className="fruit-control">
                <div className="fruit-control-item">
                  <img id="apple" src={AppleControl} onClick={(e) => this.context.handleTheme("#42cc14")} />
                </div>
                <div className="fruit-control-item">
                  <img id="orange" src={OrangeControl} onClick={(e) => this.context.handleTheme("orange")} />
                </div>
                <div className="fruit-control-item">
                  <img id="banana" src={BananaControl} onClick={(e) => this.context.handleTheme("yellow")}/>
                </div>
                <div className="fruit-control-item">
                  <img id="straw" src={StrawControl}  onClick={(e) => this.context.handleTheme("#ff4000")}/>
                </div>
              </div>
            </div> 
            {/* end class hero */}
            <div className="main-container">
                <div className="service-info">
                  <ul style={{color:`${color}`}}>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:`${color}`,borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid", borderColor:`${color}`}} icon={faShippingFast} />
                      </Link>  
                      <h3 style={{color:`${color}`}}>FREE SHIPPING</h3>
                      <p style={{color:`${color}`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:`${color}`,borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid ",borderColor:`${color}`}} icon={faExchangeAlt} />
                      </Link>  
                      <h3 style={{color:`${color}`}}>EASY RETURN</h3>
                      <p style={{color:`${color}`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:`${color}`,borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid ",borderColor:`${color}`}} icon={faShieldAlt} />
                      </Link>  
                      <h3 style={{color:`${color}`}}>SECURE PAYMENT</h3>
                      <p style={{color:`${color}`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                    <li>
                      <Link>
                      <FontAwesomeIcon style={{color:`${color}`,borderRadius: '50%',margin:"5px",padding:"5px",fontSize:"25px",border:" 2px solid",borderColor:`${color}`}} icon={faHouseUser} />
                      </Link> 
                      <h3 style={{color:`${color}`}}>24/7 SUPPORT</h3>
                      <p style={{color:`${color}`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </li>
                  </ul>
                </div>
              {/* end of class service infor */}
              <div class="slider-text">
                <p>GRAB THE</p>
                <h3 style={{color:`${color}`}}>FEATURED PRODUCTS</h3>
              </div>
              <Carousel   swipeable={false}
                          draggable={false}
                          showDots={false}
                          responsive={responsive}
                          ssr={true}
                          infinite={true}
                          autoPlay={this.props.deviceType !== "mobile" ? true : false}
                          autoPlaySpeed={2000}
                          keyBoardControl={true}
                          customTransition="all .5"
                          transitionDuration={500}
                          containerClass="carousel-container"
                          removeArrowOnDeviceType={["tablet", "mobile"]}
                          deviceType={this.props.deviceType}
                          itemClass="carousel-item-padding-40-px">
                {
                  products.map(product =>(
                    <div className="slide-item" key={product._id}>
                        <div className="img-slider">
                          <Link to={`/product/${product._id}`}>
                              <img src={product.image1} alt="thai" className="img-product"/>
                          </Link>
                        </div>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <button style={{background:`${color}`}} onClick={()=>this.context.addCart(product._id)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                    
                  ))
                }
              </Carousel>;

            <div className="last-container">
                <div className="info">
                  <br />
                  <br />
                  <h1>I am <span style={{color:`${color}`}}>Customer</span></h1>
                  <h1>And I choose to buy the freshest fruit</h1>
                  <p>Welcome to the Traidung fruits shop Where I trust the most<br /> There are many different kinds of fruit here that you need</p>
                </div>
                <div className="img-box">
                  <img src={colorImg} className="back-img" />
                  <img src="../assets/11.png" className="man-img" />
                </div>
            </div>
            </div>
            {/* end of class main-container */}
          </div>
        );  
      } 
    }

export default Home;