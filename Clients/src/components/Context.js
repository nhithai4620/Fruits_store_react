import React, { Component } from 'react';
import io from 'socket.io-client';

export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products: [],
        cart: [],
        total : 0,
        theme : "#f9b033",
        logined : "",
        customerdata : {}
    };

    socket = io('http://localhost:5000');

    handleCustomerdata = (customer) => {
        this.setState({customerdata: customer});
    }

    handleLogin = (login) => {
        this.setState({logined : login});
        if (login === "false"){
            this.setState({customerdata: {}});
        }
    }
 
    handleTheme = (color) =>{
        this.setState({theme:color});
    }

    addCart = (id) => {
        const {products,cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id;
        })

        if(check){
            console.log(check);
            const data = products.filter(product => {
                return product._id === id;
            })
            this.setState({cart: [...cart,...data]});
        }else{
            alert("The product has been added to cart.");
        }       
    };

    reduction = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if (item._id === id){
                item.count ===1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart : cart});
        this.getTotal();
    };

    increase = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if (item._id === id){
                item.count +=1;
            }
        })
        this.setState({cart : cart});
        this.getTotal();
    };

    remove = id => {
        if (window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index)=>{
            if(item._id === id){
                cart.splice(index,1);
            }
            })
            this.setState({cart : cart});
            this.getTotal();
        }
        
    };

    getTotal =() =>{ 
        const {cart} = this.state;
        const res = cart.reduce((prev, item) =>{
            return prev + (item.price * item.count)
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart',JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal',JSON.stringify(this.state.total))
        localStorage.setItem('dataTheme',JSON.stringify(this.state.theme))
        localStorage.setItem('dataLogin',JSON.stringify(this.state.logined))
        localStorage.setItem('dataCustomer',JSON.stringify(this.state.customerdata))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }

        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }

        const dataTheme = JSON.parse(localStorage.getItem('dataTheme'));
        if(dataTheme !== null){
            this.setState({theme: dataTheme});
        }

        const dataLogin = JSON.parse(localStorage.getItem('dataLogin'));
        if(dataLogin !== null){
            this.setState({logined: dataLogin});
        }

        const dataCustomer = JSON.parse(localStorage.getItem('dataCustomer'));
        if(dataCustomer !== null){
            this.setState({customerdata: dataCustomer});
        }


        this.socket.on('Server-send-products', data => {
            this.setState({products: data})
        })
    }
    


    render(){
        const {products,cart,total,theme,logined,customerdata} = this.state;
        const {addCart, reduction,increase,remove,getTotal,handleTheme,handleLogin,handleCustomerdata} = this;
        return(
            <DataContext.Provider value={{products,addCart,cart,theme, reduction,increase,remove,total,getTotal,handleTheme,handleLogin,logined,customerdata,handleCustomerdata}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

