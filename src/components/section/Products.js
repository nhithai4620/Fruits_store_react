import React from 'react';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import '../css/Products.css';


export class Products extends React.Component{
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            productsPerPage: 8
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static contextType = DataContext;

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    render(){
        const products = Object.values(this.context.products);
        const {currentPage, productsPerPage } = this.state;

        const indexOfLastTodo = currentPage * productsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
        const currentProducts = products.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderProducts = currentProducts.map((product, index) => {
                    return (
                    <div className="card" key={product._id}>
                        <div className="products-image">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image1} alt="thai" className="img-product"/>
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
                    );
          });
  
          // Logic for displaying page numbers
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handleClick}
              >
                {number}
              </li>
            );
        });


        return(
        <>
        <div className="padding-header" style={{background:`${this.context.theme}`}}>

        </div>
        {/* <div id="product">
            
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
        </div> */}

        <div >
            <div id="product">
              {renderProducts}
            </div>
            <ul id="page-numbers">
              {renderPageNumbers}
            </ul>
        </div>
        </>
        )
    }
}

export default Products;