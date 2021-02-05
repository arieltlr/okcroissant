
import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchABread(this.props.breadId)
    }


    render() {
        if (!this.props.bread){
            return null
        } else {
            return (
                <div className="cart-items-master">
                    <div className="item-info">
                        <p>{this.props.bread.name}</p>
                        <p>${this.props.bread.price}</p>
                    </div>
                    <div>
                        <img className="img-cart" src={this.props.bread.image} alt="bread-image" />
                    </div>
                </div>

            )
        }
    }
}

export default CartItem;