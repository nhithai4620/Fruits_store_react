import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import {DataContext} from './Context';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export class Header extends React.Component{
    static contextType = DataContext;

    state ={
        toggle: false,
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    handleLogout = () =>{
        this.context.handleLogin("false");
    }



  render() {
    const {toggle} = this.state;
    const {cart} = this.context;
    if (this.context.logined === "true"){
        return (
          <header>
            <div className="menu" onClick={this.menuToggle}> 
              <img src={Menu} alt="" width="20"/>
            </div>
            <div className="logo">
              <Link href="/home" className="logo_name">Traidung</Link>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>              
                    <li><Link to="/about">About</Link></li>
                    <li className='dropdown'>
                      <li> <Link to="/profile"><FontAwesomeIcon style={{color:"white", fontSize:"18px"}} icon={faUser} /></Link></li>
                      <li className='dropdown-content' onClick={this.handleLogout}><Link><FontAwesomeIcon style={{color:"white", fontSize:"18px"}} icon={faSignOutAlt} /></Link> </li>
                    </li>
                    <li className="close" onClick={this.menuToggle}>
                        <img src={Close} alt="" width="20"/>
                    </li> 
                </ul>
                <div className="nav-cart">
                      <span>{cart.length}</span>
                      <Link to="/cart">
                      <FontAwesomeIcon style={{color:"white"}} icon={faShoppingCart} />
                      </Link>   
                </div>
            </nav>
          </header>
      );
    } else{
        return (
          <header>
            <div className="menu" onClick={this.menuToggle}> 
              <img src={Menu} alt="" width="20"/>
            </div>
            <div className="logo">
              <Link to="/home" className="logo_name">Traidung</Link>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>              
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li className="close" onClick={this.menuToggle}>
                        <img src={Close} alt="" width="20"/>
                    </li>
                </ul>
                <div className="nav-cart">
                      <span>{cart.length}</span>
                      <Link to="/cart">
                      <FontAwesomeIcon style={{color:"white"}} icon={faShoppingCart} />
                      </Link>   
                </div>
            </nav>
          </header>
      );
    }
  }
}

export default Header;