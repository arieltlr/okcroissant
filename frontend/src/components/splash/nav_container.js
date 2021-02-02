import { connect } from 'react-redux';
import NavSplash from './nav_splash'
import { openModal } from '../../actions/modal_actions';

// actions

const msp = (state, ownProps) => {
    return {
    }
}
const mdp = (dispatch) => {
    // debugger
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(msp, mdp)(NavSplash)