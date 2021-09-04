import React, { Component } from 'react';


export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        products: [
            {
                "_id":"1",
                "title":"Nike Jordan 1",
                "src": "https://th.bing.com/th/id/OIP.pU29hdXQkvkOw38qI5m7CwHaHa?pid=ImgDet&w=600&h=600&rs=1" ,
                "description": "Jordan 1 Low Shattered Backboard",
                "content": "From OG colorways like the Jordan 1 Banned to collaborations like the Jordan 1 Travis Scott, shop Air Jordan 1 shoes in every colorway and silhouette on StockX",
                "price":23,
                "colors":["red","yellow","pink","blue"],
                "count": 1

            },
            {
                "_id":"2",
                "title":"Nike Air Force 1",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg" ,
                "description": "Basic low version",
                "content": "From high-top to low-top. Live the legend of the Air Force 1, modernized for ultimate street style.",
                "price":79,
                "colors":["black","white","red","blue"],
                "count": 1

            },
            {
                "_id":"3",
                "title":"Adidas Prophere",
                "src": "https://fun-sport-vision.com/dpshop_grafiken/produktgrafiken4/adidas_prophere_aq0508_02_gross.jpg" ,
                "description": "Adidas Prophere Sneakers for Men",
                "content": "The Prophere is a hot new release from Adidas which features a blend of the UltraBoost’s silhouette and a Primeknit upper construction that’s reminiscent of the Adidas NMD. But, don’t be fooled, this new release doesn’t actually feature any Boost cushioning",
                "price":50,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1

            },
            {
                "_id":"4",
                "title":"Converse 1970s low",
                "src": "https://cdnd.lystit.com/photos/4489-2014/10/28/converse-black-1970s-chuck-taylor-canvas-sneakers-product-1-24998209-6-188610365-normal.jpeg" ,
                "description": "Black All Star Ox Casual Basketball Shoes",
                "content": "The Converse All Star Chuck ’70 is our re-crafted sneaker that uses modern details to celebrate the original Chuck Taylor All Star from the 1970s. It features a slightly higher rubber foxing, a cushioned footbed that provides long-lasting comfort and a more substantial rubber toe cap",
                "price":35,
                "colors":["orange","black","crimson","teal"],
                "count": 1

            },
            {
                "_id":"5",
                "title":"Vans Old Skool",
                "src": "https://th.bing.com/th/id/OIP.PpybT0XITa89_XtzRTJPkQHaHa?pid=ImgDet&rs=1" ,
                "description": "The original classic side stripe skate shoe",
                "content": "The Old Skool, Vans classic skate shoe and the first to bear the iconic side stripe, has a low-top lace-up silhouette with a durable suede and canvas upper with padded tongue and lining and Vans signature Waffle Outsole.",
                "price":87,
                "colors":["orange","black","crimson","teal"],
                "count": 1

            },
            {
                "_id":"6",
                "title":"Adidas Superstar",
                "src": "https://th.bing.com/th/id/R35088645ffb175d572b27a2d1473f229?rik=XQJi7N9wx4EWzQ&riu=http%3a%2f%2fwww.aireslibres.fr%2fwp-content%2fuploads%2f2019%2f04%2fadidas-originals-sneaker-superstar-blancnoir-homme_1.jpg&ehk=iTx3nFPWFDKuHFcNHkVgyr1RMnev8b9ItZtVctb5Ggs%3d&risl=&pid=ImgRaw" ,
                "description": "Adidas Superstar – a real Superhero",
                "content": "adidas Originals Superstar Shoes. Arguably the most recognisable of any adidas shoe, the Superstar has been a mainstay of street fashion for generations. These iconic shell toe kicks cut a distinguished silhouette and enjoy a unique basketball heritage.",
                "price":90,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id":"7",
                "title":"ADIDAS YEEZY BOOST 350",
                "src": "https://mysportsshoe.com/wp-content/uploads/2020/02/168022_2.jpg" ,
                "description": "Official Yeezy 350 Outlet",
                "content": "The YEEZY BOOST 350 V2 Ash Stone features an upper composed of multi-toned re-engineered Primeknit with a post-dyed monofilament side stripe woven into the upper. This model explores a special stone washing process that creates a one-of-a-kind Primeknit upper for every pair. The midsole utilizes adidas’ innovative BOOST™ technology.",
                "price":120,
                "colors":["orange","black","crimson","teal"],
                "count": 1

            },
            {
                "_id":"8",
                "title":"MLB Boston Red Sox",
                "src": "https://shopgiayreplica.com/wp-content/uploads/2020/03/giay-mlb-boston-replica-1.jpg" ,
                "description": "MLB big ball chunky",
                "content": "MLB Korea - New York Yankees Sneakers",
                "price":29,
                "colors":["orange","black","crimson","teal"],
                "count": 1

            },
            {
                "_id":"9",
                "title":"Adidas Alphabounce",
                "src": "https://thuvienmuasam.com/uploads/default/original/2X/b/bafd5e67a1fc0e7f119f881cbdef51ec01eafd5d.jpeg" ,
                "description": "Alphabounce Beyond Shoes",
                "content": "alphabounce beyond 2 m running shoes These neutral running shoes were designed for the athlete who runs to be the best at their sport. A seamless mesh upper has strategic zones of reinforcement to support multidirectional movement.",
                "price":47,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            }
        ],
        cart: [],
        total : 0
    };

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
    }
    


    render(){
        const {products,cart,total} = this.state;
        const {addCart, reduction,increase,remove,getTotal} = this;
        return(
            <DataContext.Provider value={{products,addCart,cart, reduction,increase,remove,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

