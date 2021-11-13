import React from 'react';
import {DataContext} from '../Context';
import '../css/Admin.css';
import io from 'socket.io-client';



export class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dashboard: "true",
            products: "false",
            customers: "false",
            invoices: "false",
            invoices_detail: "false",
            notifications: "false"
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

        const renderPage = () => {
            if (this.state.dashboard === "true"){
                return(
                    <div>
                        Dashboard Page
                    </div>
                    );
            } else if(this.state.products === "true") {
                return(
                    <div>
                        Products Page
                    </div>
                    );
            } else if(this.state.customers === "true") {
                return(
                    <div>
                        Customers Page
                    </div>
                    );
            } else if(this.state.invoices === "true") {
                return(
                    <div>
                        Invoices Page
                    </div>
                    );
            }  else if(this.state.invoices_detail === "true") {
                return(
                    <div>
                        Invoices details Page
                    </div>
                    );
            }  else if(this.state.notifications === "true") {
                return(
                    <div>
                        Notifications Page
                    </div>
                    );
            }   
        }
        

        return(
            <>
            <div className='admin'>
                <div class="admin-vertical-menu">
                    <a href="#" class="active" onClick={this.setDashboard}>Dashboard</a>
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