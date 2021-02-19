import React from 'react';
import CartItem from "./cart_item_container";
import Footer from "../splash/footer";

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    componentDidMount(){
        //  
        this.props.fetchUserCartItems(this.props.user)
    }

    handleDelete(value) {
        return e => this.props.deleteBreadItem(value)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.cart !== this.props.cart){
            this.props.fetchUserCartItems(this.props.user)
        }
    }

    handleCheckout(){
        this.props.cart.map(item =>{
            this.props.deleteBreadItem(item._id)
        })
        alert("Good for you!! Bread is coming your way");
    }

    render() {
        let breads;
        let quantity;
        let price = 0;
        if (this.props.cart === undefined){
            return null
        } else if (this.props.cart.length === 0){
            return <div>
                <p className="No-bread">Let's get more bread!</p>
                <Footer/>
                </div>
        }
        else {
            breads = this.props.cart.map((items, i) => {
                price += items.price
                return (
                    <div>
                        <div className="cart-items" key={i}>
                            <CartItem className breadId={items.bread} />
                            <div className="button-cart">
                                <button className="button-splash1" value={items._id} onClick={this.handleDelete(items._id)}>Delete Bread</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })
            quantity = this.props.cart.length
            return (
                <div className="cart-master">
                    {breads}
                    <p className="quantity">
                        <p className="cartprice">Current Total: $ <span className="editbread">{price = parseFloat(price).toFixed(2)}</span></p>
                        <p><span className="editbread">{quantity}</span> bread(s) coming your way!</p>
                    </p>
                    <div className="button-checkout">
                        <button className="button-splash2" onClick={()=>this.handleCheckout()}>Checkout!</button>
                    </div>
                    <Footer />
                </div>

            )
        }
    }
}

export default Cart;