import React from 'react';
import Footer from '../splash/footer';
import { Link } from 'react-router-dom';
// THIS IS THE MAIN SPLASH 
// onclickk
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="footer">
                    <Footer />
                </div>
            </div>

        )
    }
}

export default Cart;