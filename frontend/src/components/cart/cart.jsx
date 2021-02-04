import React from 'react';
import Footer from '../splash/footer';
import CartItem from "./cart_item_container";

class Cart extends React.Component {
    
    componentDidMount(){
        // debugger
        this.props.fetchUserCartItems(this.props.user)
    }

    render() {
        let breads;
        // debugger
        if (this.props.cart !== undefined){
            breads = this.props.cart.map((items, i) => {
                debugger
                return (
                    <div key={i}>
                        <CartItem breadId={items.bread}/>
                    </div>
                )
            })
        }
        return (
            <div>
                <div> {/* the breads are all below */}
                    {breads}
                </div>
            </div>

        )
    }
}

export default Cart;