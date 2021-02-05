import React from 'react';
import CartItem from "./cart_item_container";

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

    render() {
        let breads;
        //  
        if (this.props.cart !== undefined){
            breads = this.props.cart.map((items, i) => {
                return (
                    <div key={i}>
                        <CartItem breadId={items.bread}/>
                        <button value={items._id} onClick={this.handleDelete(items._id)}>Delete Bread</button>
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