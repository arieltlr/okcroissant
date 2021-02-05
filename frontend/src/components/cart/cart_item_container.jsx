import { connect } from 'react-redux';
import CartItem from './cart_item';
import { fetchABread} from "../../actions/bread_actions";

const msp = (state, ownProps) => {
    //    
    return {
        breadId: ownProps.breadId,
        bread: state.bread[ownProps.breadId]
    }
}
const mdp = (dispatch) => {
    return {
        fetchABread: (breadId) => dispatch(fetchABread(breadId))
    }
}

export default connect(msp, mdp)(CartItem);