import React from 'react';
import {DataContext} from '../Context';
import '../css/Admin.css';
import io from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SimpleChart from "./charts/SimpleChart";
import CourseBarChart from "./charts/CourseBarChart";



export class Admin extends React.Component{
    static contextType = DataContext;
    constructor(props){
        super(props)
        this.state = {
            dashboard: "true",
            products: "false",
            customers: "false",
            invoices: "false",
            invoices_detail: "false",
            notifications: "false",

            students: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
        }

        this.setDashboard = this.setDashboard.bind(this)
        this.setProducts = this.setProducts.bind(this)
        this.setCustomers = this.setCustomers.bind(this)
        this.setInvoices = this.setInvoices.bind(this)
        this.setInvoices_detail = this.setInvoices_detail.bind(this)
        this.setNotifications = this.setNotifications.bind(this)
        
    }

    setDashboard(event) {
        this.setState({
            dashboard: "true",
            products: "false",
            customers: "false",
            invoices: "false",
            invoices_detail: "false",
            notifications: "false" 
        })
    }

    setProducts(event) {
        this.setState({
            dashboard: "false",
            products: "true",
            customers: "false",
            invoices: "false",
            invoices_detail: "false",
            notifications: "false" 
        })
    }

    setCustomers(event) {
        this.setState({
            dashboard: "false",
            products: "false",
            customers: "true",
            invoices: "false",
            invoices_detail: "false",
            notifications: "false" 
        })
    }

    setInvoices(event) {
        this.setState({
            dashboard: "false",
            products: "false",
            customers: "false",
            invoices: "true",
            invoices_detail: "false",
            notifications: "false" 
        })
    }

    
    setInvoices_detail(event) {
        this.setState({
            dashboard: "false",
            products: "false",
            customers: "false",
            invoices: "false",
            invoices_detail: "true",
            notifications: "false" 
        })
    }

    
    setNotifications(event) {
        this.setState({
            dashboard: "false",
            products: "false",
            customers: "false",
            invoices: "false",
            invoices_detail: "false",
            notifications: "true" 
        })
    }

    render(){

        const renderTableHeader = () => {
            let header = Object.keys(this.state.students[0])
            return header.map((key, index) => {
               return <th key={index}>{key.toUpperCase()}</th>
            })
        }

        const renderTableData = ()  =>{
            return this.state.students.map((student, index) => {
               const { id, name, age, email } = student //destructuring
               return (
                  <tr key={id}>
                     <td>{id}</td>
                     <td>{name}</td>
                     <td>{age}</td>
                     <td>{email}</td>
                  </tr>
               )
            })
        }




        const renderPage = () => {
            if (this.state.dashboard === "true"){
                return(
                    <div className='admin-page'>
                        <h4>Dashboard Page</h4>
                        <Row style={{
                                padding: '20px 0px',
                                }}>
                            <Col className='row-dashboard'>
                                <h5 style={{
                                color: 'red',
                                }}>Total Money</h5>
                                <p>3000$</p>
                            </Col>
                            <Col className='row-dashboard'>
                                <h5 style={{
                                color: 'yellow',
                                }}>Today User</h5>
                                <p>10</p>
                            </Col>
                            <Col  className='row-dashboard'>
                                <h5 style={{
                                color: 'green',
                                }}>New Client</h5>
                                <p>10</p>
                            </Col>
                            <Col  className='row-dashboard'>
                                <h5 style={{
                                color: 'blue',
                                }}>Total products sold</h5>
                                <p>200</p>
                            </Col>
                        </Row>
                        <SimpleChart/>
                        
                    </div>
                    );
            } else if(this.state.products === "true") {
                return(
                    <div className='admin-page'>
                        <div>
                            <h1 id='title'>React Dynamic Table</h1>
                            <table id='students'>
                            <thead>{renderTableHeader()}</thead>
                            <tbody>{renderTableData()}</tbody>
                            </table>
                        </div>
                    </div>
                );
            } else if(this.state.customers === "true") {
                return(
                    <div className='admin-page'>
                        Customers Page
                        <div>
                            <h1 id='title'>React Dynamic Table</h1>
                            <table id='students'>
                            <thead>{renderTableHeader()}</thead>
                            <tbody>{renderTableData()}</tbody>
                            </table>
                        </div>
                    </div>
                    );
            } else if(this.state.invoices === "true") {
                return(
                    <div className='admin-page'>
                        Invoices Page
                        <div>
                            <h1 id='title'>React Dynamic Table</h1>
                            <table id='students'>
                            <thead>{renderTableHeader()}</thead>
                            <tbody>{renderTableData()}</tbody>
                            </table>
                        </div>
                    </div>
                    );
            }  else if(this.state.invoices_detail === "true") {
                return(
                    <div className='admin-page'>
                        Invoices details Page
                        <div>
                            <h1 id='title'>React Dynamic Table</h1>
                            <table id='students'>
                            <thead>{renderTableHeader()}</thead>
                            <tbody>{renderTableData()}</tbody>
                            </table>
                        </div>
                    </div>
                    );
            }  else if(this.state.notifications === "true") {
                return(
                    <div className='admin-page'>
                        Notifications Page
                    </div>
                    );
            }   
        }
        

        return(
            <>
            <div className="padding-header" style={{backgroundColor:`${this.context.theme}`}}>
                {/* padding part for header */}
            </div>
            <div className='admin'>
                <div class="admin-vertical-menu">
                    <div className='material-dashboard'>
                    <FontAwesomeIcon style={{color:"white", fontSize:"17px", marginRight:"5px"}} icon={faWarehouse} /> Material Dashboard</div>
                    <a href="#" onClick={this.setDashboard}>Dashboard</a>
                    <a href="#" onClick={this.setProducts}>Products</a>
                    <a href="#" onClick={this.setCustomers}>Customers</a>
                    <a href="#" onClick={this.setInvoices}>Invoices</a>
                    <a href="#" onClick={this.setInvoices_detail}>Invoices details</a>
                    <a href="#" onClick={this.setNotifications}>Notifications</a>
                </div>
                {renderPage()}   
            </div>
            
            </>
    
        )
    }
}

export default Admin;