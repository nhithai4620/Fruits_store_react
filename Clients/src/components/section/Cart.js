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
            return <>
                <div className="padding-header" style={{background:`${this.context.theme}`}}>

                </div>
                <div className='emptyproduct'>
                <h3>Your cart is empty</h3>
                <p>Add something to make me happy :)))</p>
                <img src="../assets/cart.png" alt=""/>
                </div>
                
            </>
        }else{
        return (
            <>
            <div className="padding-header" style={{background:`${this.context.theme}`}}>

            </div>
            <div className="Cart-content" >
                <span className="sell-logan" style={{color:`${this.context.theme}`}}> Your cart</span>
            </div>

            <div className="cart-details">
            {
                cart.map(item =>(
                    <div className="cart" key={item._id} style={{background:`${item.color1}`}}>
                        <img src={item.image2} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price * item.count}</span>
                            </div>
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
                <Link to="/invoice" 
                   >Invoice</Link>
                <h3>Total : ${total}</h3>
            </div>
        </div>
        </>
            );
        }
    }
}

export default Cart;