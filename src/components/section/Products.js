import React from 'react';
import {Link} from "react-router-dom";
import {DataContext} from '../Context';
import '../css/Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export class Products extends React.Component{
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            productsPerPage: 8,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickPre = this.handleClickPre.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
    }

    static contextType = DataContext;

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    handleClickPre(event) {
        if (this.state.currentPage > 1){
            this.setState({
                currentPage: (this.state.currentPage - 1)
            });
        }
    }

    handleClickNext(event) {
        if (this.state.currentPage < Math.round((this.context.products.length / this.state.productsPerPage))){
        this.setState({
            currentPage: (this.state.currentPage + 1)
        });
        }
    }

    render(){
        const options = [
            { value: 'nhap-khau', label: 'Nhập khẩu' },
            { value: 'noi-dia', label: 'Nội địa' },
            { value: 'trai-cay', label: 'Trái cây' },
            { value: 'rau-cu', label: 'Rau củ' }
        ]
        const products = Object.values(this.context.products);
        const {currentPage, productsPerPage } = this.state;
        // console.log(currentPage);
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
            if (number === currentPage){
                return (
                    <li style={{
                        backgroundColor: "white",
                        color: "black"
                    }}
                      key={number}
                      id={number}
                      onClick={this.handleClick}
                    >
                      {number}
                    </li>
                  );
            }
            else{
                return (
                    <li
                      key={number}
                      id={number}
                      onClick={this.handleClick}
                    >
                      {number}
                    </li>
                  );
            }
          
        });


        return(
        <>
        <div className="padding-header" style={{background:`${this.context.theme}`}}>

        </div>
        <div className='product-banner'> 
            <div className="select-dropdown">
                <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                />
            </div>
           
            <ul id="page-numbers">     
                <li onClick={this.handleClickPre}><FontAwesomeIcon icon={faAngleDoubleLeft} /></li>
                {renderPageNumbers}
                <li onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
            </ul>
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

        <div className='numbers-page'>
            <div id="product">
              {renderProducts}
            </div>
            <div className='page-number-bottom'>
                <ul id="page-numbers">
                <li onClick={this.handleClickPre}><FontAwesomeIcon icon={faAngleDoubleLeft} /></li>
                {renderPageNumbers}
                <li onClick={this.handleClickNext}><FontAwesomeIcon icon={faAngleDoubleRight} /></li>
                </ul>
            </div>
            
        </div>
        </>
        )
    }
}

export default Products;