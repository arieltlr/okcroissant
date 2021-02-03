import { connect } from 'react-redux';
import NavBar from './nav'

// this is for the nav.jsx to see if a user is signed in

const msp = (state, ownProps) => {
    // debugger
    return{
        isAuthenticated : state.session.isAuthenticated
    }
}
const mdp = (dispatch) => {
    // debugger
    return {

    }
}

export default connect(msp, mdp)(NavBar)