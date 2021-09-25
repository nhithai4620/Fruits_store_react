import React from 'react';
import {DataContext} from '../Context';
import {Link} from 'react-router-dom';

import '../css/Details.css';

export class Details extends React.Component{
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id=== this.props.match.params.id;
            })
            this.setState({product:data})
        }
    };

    componentDidMount() {
        this.getProduct();
    }


    render(){
        const {product} = this.state;
        const {addCart} = this.context;
        return(            
        <>
            {
                product.map(item =>(
                    <div className="details" key={item._id}>
                        <img src={item.image} alt="" style={{width:"100%",height:"100%"}}/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                         
          
                            <Link to="/cart" className="cart" onClick={()=> addCart(item._id)}>
                                Add to cart
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
        )
    }
}

export default Details;