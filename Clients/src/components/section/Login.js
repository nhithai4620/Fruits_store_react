import React from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import io from 'socket.io-client';


export class Login extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
          username: '',
          password: '',
          logged: false,
        }
    
        this.socket = io('http://localhost:5000')
        this.setUserName = this.setUserName.bind(this)
        this.setPassWorld = this.setPassWorld.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    setUserName(event) {
        this.setState({
          username: event.target.value
        })
    }

    setPassWorld(event) {
        this.setState({
          password: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
     
        this.socket.emit('login-data', {
          username : this.state.username,
          password: this.state.password
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
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="txt_field">
                        <input type="text" required onChange={this.setUserName} />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required onChange={this.setPassWorld}/>
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot password?</div>
                    <input type="submit" value="Login" />
                    <div className="signup_link">
                        Not a member ? <Link to="/signup"><a href="#">Sign up</a></Link>
                    </div>
                </form>
            </div>
            
            </>
        );
    }
}

export default Login;