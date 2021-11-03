import React from 'react';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import '../css/Products.css';


export class Products extends React.Component{
    constructor() {
        super();
        this.state = {
          currentPage: 1,
          productsPerPage: 9
        };
        this.handleClick = this.handleClick.bind(this);
    }
    static contextType = DataContext;
    render(){
        const {products} = this.context;
        return(
        <>
        <div className="padding-header" style={{background:`${this.context.theme}`}}>

        </div>
        <div id="product">
            
            {
                products.map(product =>(
                    <div className="card" key={product._id}>
                        <div className="products-image">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image2} alt="thai" className="img-product"/>
                        </Link>
                        </div>
                        
                        <div className="content">
                            <h3>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </h3>
                            <span>${product.price}</span>
                            <button onClick={()=>this.context.addCart(product._id)}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
        )
    }
}

export default Products;