import React from 'react';
import '../css/Signup.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import io from 'socket.io-client';
import { eventNames } from 'process';

export class Signup extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            fullname: '',
            username: '',
            email: '',
            phonenumber: '',
            password: '',
            confirmpassword: '',
            signuped: ''
        }

        this.socket = io('http://localhost:5000')
        this.setFullName = this.setFullName.bind(this)
        this.setUserName = this.setUserName.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setPhoneNumber = this.setPhoneNumber.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setConfirmPassWorld = this.setConfirmPassWorld.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setFullName(event){
        this.setState({
            fullname: event.target.value
        })
    }

    setUserName(event){
        this.setState({
            username: event.target.value
        })
    }

    setEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    setPhoneNumber(event){
        this.setState({
            phonenumber: event.target.value
        })
    }

    setPassword(event){
        this.setState({
            password: event.target.value
        })
    }

    setConfirmPassWorld(event){
        this.setState({
            confirmpassword: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
     
        this.socket.emit('signup-data', {
          fullname : this.state.fullname,
          username: this.state.username,
          email: this.state.email,
          phonenumber: this.state.phonenumber,
          password: this.state.password,
        })
        
        this.setState({
            logged: true
        })
    
    }

    static contextType = DataContext;

    render(){
        return (
            <>
            <div className="padding-header" style={{backgroundColor:`${this.context.theme}`}}>
                {/* padding part for header */}
            </div>
            <div className="signup">
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="txt_field">
                        <input type="text" required onChange={this.setFullName}/>
                        <span></span>
                        <label>Full name</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" required onChange={this.setUserName}/>
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className="txt_field">
                        <input type="email" required onChange={this.setEmail}/>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="number" required onChange={this.setPhoneNumber}/>
                        <span></span>
                        <label>Phone number</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required onChange={this.setPassword}/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required onChange={this.setConfirmPassWorld} />
                        <span></span>
                        <label>Confirm password</label>
                    </div>
                    <input type="submit" value="Login" />
                    <div className="signup_link">
                        Have an account ? <Link to="/login"><a href="#">Login</a></Link>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

export default Signup;