import { connect } from 'react-redux';
import Cart from './cart';
import {fetchUserCartItems} from "../../actions/cart_actions";
import { deleteBreadItem } from "../../actions/cart_actions";
const msp = (state, ownProps) => {
    // debugger  //check the cart
    return {
        cart : state.cart.data,
        user: state.session.user.id
    }
}
const mdp = (dispatch) => {
    return {
        deleteBreadItem: (itemId) => dispatch(deleteBreadItem(itemId)),
        fetchUserCartItems: (userId) => dispatch(fetchUserCartItems(userId))
    }
}

export default connect(msp, mdp)(Cart);