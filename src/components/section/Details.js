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
            <div className="padding-header">

            </div>
            <div style={{display:"grid"}}>
            {
                product.map(item =>(

                <section className="details" key={item._id}>
                    <div className="product_photo">
                        <div className="photo_container">
                        <div className="photo_main" style={{background:`${item.color1}`}}>
                            <div className="controls">
                            <i className="fa fa-share-alt" />
                            <i className="fa fa-heart" />
                            </div>
                            <img id="apple-img" src={item.image3} alt />
                        </div>
                        <div className="photo-ablum">
                            <ul>
                            <li><img src="../assets/green-apple2.png" /></li>
                            <li><img src="../assets/half-apple.png" /></li>
                            <li><img src="../assets/apple-flipped.png" /></li>
                            <li><img src="../assets/apple-top.png" /></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="product_info">
                        <div className="title">
                        <h1>
                            {item.title}
                        </h1>
                        <span>
                            COD: 45999
                        </span>
                        </div>
                        <div className="price">
                        $ <span>{item.price}</span>
                        </div>
                        <div className="description">
                        <h3>BENEFITS</h3>
                        <ul>
                            <li>Apples are nutricious</li>
                            <li>Apples may be good for weight loss</li>
                            <li>Apples may be good for bone health</li>
                            <li>They're linked to a lowest risk of diabletes</li>
                        </ul>
                        </div>
                        <Link to="/cart" className="buy-btn" onClick={()=> addCart(item._id)}>
                                Add to cart
                        </Link>
                    </div>
                    </section>


                    // <div className="details" key={item._id}>
                    //     <img src={item.image} alt="" style={{width:"100%",height:"100%"}}/>
                    //     <div className="box">
                    //         <div className="row">
                    //             <h2>{item.title}</h2>
                    //             <span>${item.price}</span>
                    //         </div>
                         
          
                    //         <Link to="/cart" className="cart" onClick={()=> addCart(item._id)}>
                    //             Add to cart
                    //         </Link>
                    //     </div>
                    // </div>
                ))
            }
            </div>
        </>
        )
    }
}

export default Details;