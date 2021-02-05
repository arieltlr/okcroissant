import React from 'react';
import CartItem from "./cart_item_container";
import Footer from "../splash/footer";

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    componentDidMount(){
        // debugger
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
        // debugger
        this.props.cart.map(item =>{
            // debugger
            this.props.deleteBreadItem(item._id)
        })
    }

    render() {
        let breads;
        let quantity;
        let price = 0;
        // debugger
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
                // debugger
                price += items.price
                return (
                    <div>
                        <hr />
                        <div className="cart-items" key={i}>
                            <CartItem className breadId={items.bread} />
                            <div className="button-cart">
                                <button className="button-splash1" value={items._id} onClick={this.handleDelete(items._id)}>Delete Bread</button>
                            </div>
                        </div>
                    </div>
                )
            })
            quantity = this.props.cart.length
            return (
                <div className="cart-master">
                    {breads}
                    <div className="button-checkout">
                        <button className="button-splash1" onClick={()=>this.handleCheckout()}>Checkout</button>
                    </div>
                    <p className="quantity">
                        <p>${price}</p>
                        <p>{quantity} breads coming your way</p>
                    </p>
                    <Footer />
                </div>

            )
        }
    }
}

export default Cart;