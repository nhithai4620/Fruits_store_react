import React from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';
import '../css/Details.css';
import '../css/Cart.css';

export class Cart extends React.Component{
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render(){
        const {cart, increase, reduction,remove,total} = this.context;
        if (cart.length ===0){
            return <h2 style={{textAlign: "center", paddingBottom:"155px"}}>Nothings Product</h2>
        }else{
        return (
            <div className="cart-details">
            {
                cart.map(item =>(
                    <div className="details cart" key={item._id}>
                        <img src={item.image} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price * item.count}</span>
                            </div>
                            <p>{item.description}</p>
                            <div className="amount">
                                <button className="count" onClick={() =>reduction(item._id)} > - </button>
                                <span>{item.count}</span>
                                <button className="count" onClick={() =>increase(item._id)}> + </button>
                            </div>  
                        </div>
                        <div className="delete" onClick={()=>remove(item._id)}>X</div>
                    </div>
                ))
            }
            <div className="total">
                <Link to="/payment">Payment</Link>
                <h3>Total : ${total}</h3>
            </div>
        </div>
            );
        }
    }
}

export default Cart;