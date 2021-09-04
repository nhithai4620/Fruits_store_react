import React from 'react';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import {DataContext} from './Context';
import {Link} from 'react-router-dom'; 

export class Header extends React.Component{
    static contextType = DataContext;

    state ={
        toggle: false
    }
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

  render() {
    const {toggle} = this.state;
    const {cart} = this.context;
    return (
    <header>
      <div className="menu" onClick={this.menuToggle}> 
        <img src={Menu} alt="" width="20"/>
      </div>
      <div className="logo">
        <a href="#" class="logo_name">Traidung</a>
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
                <img src={CartIcon} alt="" width="20"></img>
                </Link>   
          </div>
      </nav>
    </header>
    );
  }
}

export default Header;