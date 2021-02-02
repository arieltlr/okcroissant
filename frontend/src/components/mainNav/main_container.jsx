import { connect } from 'react-redux';
import MainNavBar from './main'
import {logout} from '../../actions/session_actions'

// this is for the mainnavbar 
const msp = (state, ownProps) => {
    debugger
    return {
        user: state.session.user
    }
}
const mdp = (dispatch) => {
    debugger
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(MainNavBar)