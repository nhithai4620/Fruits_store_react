import React from 'react';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import '../css/Products.css';


export class Products extends React.Component{

    static contextType = DataContext;
    render(){
        const {products} = this.context;
        return(
        <div id="product">
            {
                products.map(product =>(
                    <div className="card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.src} alt="thai" className="img-product"/>
                        </Link>
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <p>{product.description}</p>
                            <button onClick={()=>this.context.addCart(product._id)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        )
    }
}

export default Products;