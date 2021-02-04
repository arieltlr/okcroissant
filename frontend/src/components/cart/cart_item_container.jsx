import { connect } from 'react-redux';
import CartItem from './cart_item';
import { fetchABread } from "../../actions/bread_actions"
const msp = (state, ownProps) => {
    // debugger  //check the cart
    return {
        cart: state.cart.data,
        bread:""
    }
}
const mdp = (dispatch) => {
    return {
        fetchABread: (breadId) => dispatch(fetchABread(breadId))
    }
}

export default connect(msp, mdp)(CartItem);