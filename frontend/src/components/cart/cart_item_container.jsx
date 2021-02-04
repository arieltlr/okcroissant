import { connect } from 'react-redux';
import CartItem from './cart_item';
import { fetchABread} from "../../actions/bread_actions";
import { deleteBreadItem } from "../../actions/cart_actions";
const msp = (state, ownProps) => {
    debugger  
    return {
    }
}
const mdp = (dispatch) => {
    return {
        deleteBreadItem: (breadId) => dispatch(deleteBreadItem(breadId)),
        fetchABread: (breadId) => dispatch(fetchABread(breadId))
    }
}

export default connect(msp, mdp)(CartItem);