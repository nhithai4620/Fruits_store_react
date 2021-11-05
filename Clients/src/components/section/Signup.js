import React from 'react';
import '../css/Signup.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';


export class Signup extends React.Component{
    static contextType = DataContext;
    render(){
        return (
            <>
            <div className="padding-header" style={{backgroundColor:`${this.context.theme}`}}>
                {/* padding part for header */}
            </div>
            <div className="signup">
                <h1>Sign up</h1>
                <form method="post">
                    <div className="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>Full name</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" required />
                        <span></span>
                        <label>User name</label>
                    </div>
                    <div className="txt_field">
                        <input type="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" required />
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