import React from 'react';
import Footer from '../splash/footer';
import { Link } from 'react-router-dom';


class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.fetchUserCartItems(this.props.userId)
    }

    deleteBread(){
        debugger //need to place correct breadId
        this.props.deleteBreadItem()
    }

    render() {
        let totalsum = 0
        let number;
        debugger
        // const breads = this.props.cart.map((bread, i) => {
        //     debugger //make sure the bread info is correct 
        //     return (
        //         <div>
        //             <p>{bread.name}</p>
        //             <p>{bread.price}</p>
        //             <div>
        //                 <button onClick={() => this.handleQuantity(true, number)}>+</button>
        //                 <p>Quantity:{number}</p>
        //                 <button onClick={() => this.handleQuantity(false, number)}>-</button>
        //             </div>
        //             <button onClick={() => this.deleteBread(bread.id)}>Delete Bread</button>
        //         </div>
        //     )
        // })
        return (
            <div>
                <div>
                    <div>
                        {/* <p>{this.props.cart}</p> */}
                    </div>
                </div>
                <div> {/* the breads are all below */}
                    {/* {breads} */}
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>

        )
    }
}

export default Cart;