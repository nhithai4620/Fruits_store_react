import React from 'react';
import '../css/Payment.css';
import {DataContext} from '../Context';
export class Payment extends React.Component{
    static contextType = DataContext;
    render(){
        return (
            <>
            <div className="padding-header" style={{background:`${this.context.theme}`}}>

            </div>
            <div className="payment">
                <h2 style={{textAlign: "center"}}>
                    Payment
                </h2>
            </div>
            </>
        );
    }
}

export default Payment;