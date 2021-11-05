import React, { Component } from 'react';


export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products: [
            {
                "_id": "1",
                "title": "Apple",
                "price": 12,
                "image1": "./assets/apple-item.png",
                "image2": "../assets/apple/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#01e37f",
                "description": "Apples are nutricious</li><li>Apples may be good for weight loss</li><li>Apples may be good for bone health</li><li>They're linked to a lowest risk of diabletes</li>" 
                ,"count" : 1
            },
            {
                "_id": "2",
                "title": "Banana",
                "price": 4,
                "image1": "./assets/banana-item.png",
                "image2": "../assets/banana/product.png",
                "color1":  "radial-gradient(#eaebaa, #d5e001)",
                "color2": "#faf330",
                "description": "<li>Bananas are a rich source of carbs</li><li>Bananas are also a good source of other types of fiber</li><li> Aiding your gut and promoting healthy blood sugar levels.</li>" 
                ,"count" : 1
            },
            {
                "_id": "3",
                "title": "Strawberries",
                "price": 16,
                "image1": "./assets/straw-item.png",
                "image2": "../assets/straw/product.png",
                "color1": "radial-gradient(#f0b9b4, #f5623d)",
                "color2": "#f12e1c",
                "description": "<li>The tiny strawberry is packed with vitamin C, fiber, antioxidants, and more</li><li>These potent little packages protect your heart</li><li>Lower your blood pressure, and guard against cancer</li>" 
                ,"count" : 1
            },
            {
                "_id": "4",
                "title": "Watermelon",
                "price": 5,
                "image1": "./assets/watermelon-item.png",
                "image2": "../assets/watermelon/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#1ba42f",
                "description": "<li> is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "5",
                "title": "Orange",
                "price": 7,
                "image1": "./assets/orange-item.png",
                "image2": "../assets/orange/product.png",
                "color1": "radial-gradient(#ebd4aa, #e09201)",
                "color2": "#faf330",
                "description": "<li>Oranges are nutricious</li><li>Oranges may be good for weight loss</li><li>Oranges may be good for bone health</li><li>They're linked to a lowest risk of diabletes</li>" 
                ,"count" : 1
            },
            {
                "_id": "6",
                "title": "Grape",
                "price": 20,
                "image1": "./assets/grape-item.png",
                "image2": "../assets/grape/product.png",
                "color1": "radial-gradient(#d383f8, #b81df0)",
                "color2": "#9704b8",
                "description": "<li>Grape are nutricious</li><li>Grape may be good for weight loss</li><li>Grape may be good for bone health</li><li>They're linked to a lowest risk of diabletes</li>" 
                ,"count" : 1
            },
            {
                "_id": "7",
                "title": "Durian",
                "price": 12,
                "image1": "./assets/durian-item.png",
                "image2": "../assets/durian/product.png",
                "color1":  "radial-gradient(#eaebaa, #d5e001)",
                "color2": "#faf330",
                "description": "<li>Durian are a rich source of carbs</li><li>Durian are also a good source of other types of fiber</li><li> Aiding your gut and promoting healthy blood sugar levels.</li>" 
                ,"count" : 1
            },
            {
                "_id": "8",
                "title": "Blue berries",
                "price": 23,
                "image1": "./assets/blue-item.png",
                "image2": "../assets/blue/product.png",
                "color1": "radial-gradient(#5e8ce9, #0b55e9)",
                "color2": "#5572cc",
                "description": "<li>Blue berries are nutricious</li><li>Blue berries may be good for weight loss</li><li>Blue berries may be good for bone health</li><li>They're linked to a lowest risk of diabletes</li>" 
                ,"count" : 1
            },
            {
                "_id": "9",
                "title": "Melon",
                "price": 9,
                "image1": "./assets/melon-item.png",
                "image2": "../assets/melon/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#086021",
                "description": "<li> is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "10",
                "title": "Avocado",
                "price": 9,
                "image1": "./assets/avocado/product-11.png",
                "image2": "../assets/avocado/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#086021",
                "description": "<li> is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "11",
                "title": "Dragonfruit",
                "price": 9,
                "image1": "./assets/dragonfruit/product-10.png",
                "image2": "../assets/dragonfruit/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#f12e1c",
                "description": "<li> is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "12",
                "title": "Kiwi",
                "price": 9,
                "image1": "./assets/kiwi/product-14.png",
                "image2": "../assets/kiwi/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#086021",
                "description": "is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "13",
                "title": "Coconut",
                "price": 5,
                "image1": "./assets/coconuts/product-16.png",
                "image2": "../assets/coconuts/product.png",
                "color1": "radial-gradient(#ebccaa, #7d3c06)",
                "color2": "#602108",
                "description": "is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "14",
                "title": "Peach",
                "price": 9,
                "image1": "./assets/peach/product-12.png",
                "image2": "../assets/peach/product.png",
                "color1": "radial-gradient(#ee6dc3, #e00165)",
                "color2": "#e00165",
                "description": "is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            },
            {
                "_id": "15",
                "title": "Guava",
                "price": 9,
                "image1": "./assets/guava/product-13.png",
                "image2": "../assets/guava/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#086021",
                "description": "is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            }
            ,
            {
                "_id": "16",
                "title": "Grapefruits",
                "price": 9,
                "image1": "./assets/grapefruits/product-15.png",
                "image2": "../assets/grapefruits/product.png",
                "color1": "radial-gradient(#ddebaa, #96e001)",
                "color2": "#086021",
                "description": "is a sweet and refreshing low calorie summer snack</li><li> useful for staying hydrated in the summer</li><li> has high water content and also provides some fiber</li>" 
                ,"count" : 1
            }
        ],
        cart: [],
        total : 0,
        theme : "#f9b033"
    };

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
    }
    


    render(){
        const {products,cart,total,theme} = this.state;
        const {addCart, reduction,increase,remove,getTotal,handleTheme} = this;
        return(
            <DataContext.Provider value={{products,addCart,cart,theme, reduction,increase,remove,total,getTotal,handleTheme}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

