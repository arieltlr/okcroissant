import { connect } from 'react-redux';
import MainNavBar from './main'
import { logout, receiveCurrentUser} from '../../actions/session_actions'


// THIS IS MAIN NAV BAR CONTAINER NOT SPLASH!!! (sorry for the file name, the main splash page is under main folder)

// this is for the mainnavbar 
const msp = (state, ownProps) => {
    // debugger
    return {
        currentUser: state.session.user
    }
}
const mdp = (dispatch) => {
    // debugger
    return {
        logout: () => dispatch(logout()),
        fetchUser: (user) => dispatch(receiveCurrentUser(user))
    }
}

export default connect(msp, mdp)(MainNavBar)