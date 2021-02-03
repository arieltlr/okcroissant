import { connect } from 'react-redux';
import Cart from './cart';
import { fetchAllBreads } from '../../actions/bread_actions';

// THIS IS THE MAIN SPLASH CONTAINER!!!!
const msp = (state, ownProps) => {
    return {
    }
}
const mdp = (dispatch) => {
    return {
    }
}

export default connect(msp, mdp)(Cart);