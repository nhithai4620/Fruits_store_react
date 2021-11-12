import React from 'react';
import '../css/Profile.css';
import {DataContext} from '../Context';
import '../css/Invoice.css';
import io from 'socket.io-client';
import {Home} from "./Home";


export class Invoice extends React.Component{
    static contextType = DataContext;
    constructor(props){
        super(props)
        this.socket = io('http://localhost:5000')
    }
    
    handleCheckOut = (Id,datetime,total) =>  (event) =>{

        this.socket.emit("invoice-data",{
            invoice_id : Id,
            cart : this.context.cart,
            customer_id : this.context.customerdata.Id,
            total_invoice : total,
            date: datetime
        })

        this.context.clearCart();
        alert("Checkout successfully");
    }

    render(){
        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
        }

        const {cart, customerdata} = this.context;
        const date = new Date();
        const d = new Date();
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        let time = h + ":" + m + ":" + s;
        let datetime = date.toDateString() + " "+ time;
        const Id = Math.random().toString().substr(2, 9); 
        var total = 0;
        const renderProducts = cart.map((product, index) => {
            total = total +  (product.price * product.count);
            return (
                <tr className="item">
                <td>{product.title}</td>
                <td>{product.count}</td>
                <td>{product.price * product.count}</td>
                </tr> 
            );
        });

        if (this.context.logined === "true"){
            if (cart.length === 0){
                return <Home/>
            }
            else{
            return (
                <>
                <div className="padding-header" style={{background:`${this.context.theme}`}}>

                </div>
                <div className='invoice'>
                    <div className="invoice-box">
                        <table>
                        <tbody><tr className="top">
                            <td colSpan={2}>
                                <table>
                                <tbody><tr>
                                    <td className="title">
                                    <h3>Zoom</h3>
                                    </td>
                                    <td style={{textAlign:"right", marginRight:"0px"}}>
                                        Invoice #: {Id}<br />
                                        Created: {date.toDateString()}<br />
                                        At: {time}
                                    </td>
                                    </tr>
                                </tbody></table>
                            </td>
                            </tr>
                            <tr className="information">
                            <td colSpan={2}>
                                <table>
                                <tbody><tr>
                                    <td style={{textAlign:"left"}}>
                                        Sparksuite, Inc.<br />
                                        12345 Sunny Road<br />
                                        Sunnyville, TX 12345
                                    </td>
                                    <td style={{textAlign:"right"}}>
                                        Zoom Corp.<br />
                                        Nguyen Nhi Thai<br />
                                        nguyennhithai4620@gmail.com
                                    </td>
                                    </tr>
                                </tbody></table>
                            </td>
                            </tr>
                            <tr className="heading">
                            <td>Item</td>
                            <td>Count</td>
                            <td>Price</td>
                            </tr>
                            {renderProducts}
                            <tr class="total">
                                <td></td>

                                <td>Total: ${total}</td>
                            </tr>
                        </tbody></table>
                    
                    </div>
                    <button className='checkout-btn' onClick={this.handleCheckOut(Id,datetime,total)}>Checkout</button>
                </div>  
                </>
            );
            }
    } else {
        return (
            <>
            <div className="padding-header" style={{background:`${this.context.theme}`}}>

            </div>
            <h3 className="login-please">Login please !</h3>
            </>
        )
    }
    }
}

export default Invoice