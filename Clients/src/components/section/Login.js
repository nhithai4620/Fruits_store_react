import React from 'react';
import '../css/Login.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';

export class Login extends React.Component{
    static contextType = DataContext;
    render(){
        return (
            <>

            <div className="padding-header" style={{backgroundColor:`${this.context.theme}`}}>
                {/* padding part for header */}
            </div>
            <div className="login">
                <h1>Login</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" required />
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