import { connect } from 'react-redux';
import Cart from './cart';
import {fetchUserCartItems, deleteBreadItem} from "../../actions/cart_actions"

const msp = (state, ownProps) => {
    debugger
    return {
        cart : state.cart,
        user: state.session.user
    }
}
const mdp = (dispatch) => {
    return {
        deleteBreadItem: (breadId) => dispatch(deleteBreadItem(breadId)),
        fetchUserCartItems: (userId) => dispatch(fetchUserCartItems(userId))
    }
}

export default connect(msp, mdp)(Cart);