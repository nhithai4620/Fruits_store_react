import React from 'react';
import Products from './section/Products';
import Details from './section/Details';
import Home from './section/Home';
import Cart from './section/Cart';
import Login from './section/Login';
import Signup from './section/Signup';
import Contact from './section/Contact';
import About from './section/About';
import Profile from './section/Profile';
import Invoice from './section/invoice';
import Admin from './section/Admin';
import {Route} from "react-router-dom";

export class Section extends React.Component{
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact/>
        <Route path="/home" component={Home} exact/>
        <Route path="/product" component={Products} exact/>
        <Route path="/product/:id" component={Details}/>
        <Route path="/cart" component={Cart} exact/> 
        <Route path="/login" component={Login} exact/>
        <Route path="/signup" component={Signup} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/profile" component={Profile} exact/>
        <Route path="/invoice" component={Invoice} exact/>
        <Route path="/admin" component={Admin} exact/>
      </section>
    );
  }
}

export default Section;

