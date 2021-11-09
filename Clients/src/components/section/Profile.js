import React from 'react';
import '../css/Profile.css';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Home} from './Home';



export class Profile extends React.Component{

    static contextType = DataContext;
    render(){
        const {customerdata} = this.context;
        if(this.context.logined === "false"){
            return <Home/>
        } else {
        return (
            <div className='profile'>
                <div className="padding-header" style={{backgroundColor:`${this.context.theme}`}}>
                {/* padding part for header */}
                </div>
                
                <header className="ScriptHeader">
                    <Link style={{backgroundColor:`${this.context.theme}`}} id='profile-back-btn' to="/home"><FontAwesomeIcon style={{color:"white"}} icon={faBackspace} /></Link>
                    <div className="rt-container">
                    <div className="col-rt-12">
                        <div className="rt-heading">
                        <h1 style={{color:`${this.context.theme}`}}>Customer Profile Page</h1>
                        <p>A responsive student profile page design.</p>
                        </div>
                    </div>
                    </div>
                </header>
                <section className='profile-container'>
                    <div className="rt-container">
                    <div className="col-rt-12">
                        <div className="Scriptcontent">
                        {/* Student Profile */}
                        <div className="student-profile py-4">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                <div className="card shadow-sm">
                                    <div className="card-header bg-transparent text-center">
                                    <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp" />
                                    <h3>{customerdata.FullName}</h3>
                                    </div>
                                    <table className="table table-bordered">
                                        <tbody><tr>
                                            <th width="30%">ID</th>
                                            <td width="2%">:</td>
                                            <td>{customerdata.Id}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">User name	</th>
                                            <td width="2%">:</td>
                                            <td>{customerdata.UserName}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Email</th>
                                            <td width="2%">:</td>
                                            <td>{customerdata.Email}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Phone number</th>
                                            <td width="2%">:</td>
                                            <td>{customerdata.PhoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Address</th>
                                            <td width="2%">:</td>
                                            <td>{customerdata.Address}</td>
                                        </tr>
                                        </tbody></table>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* partial */}
                        </div>
                    </div>
                    </div>
                </section>
   
            </div>
        );
        }
    }
    
}

export default Profile;