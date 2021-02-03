import { connect } from 'react-redux';
import MainPage from './main';
import { fetchAllBreads } from '../../actions/bread_actions';

// THIS IS THE MAIN SPLASH CONTAINER!!!!
const msp = (state, ownProps) => {
    debugger
    return {
        breads: Object.values(state.bread)
    }
}
const mdp = (dispatch) => {
    return {
        fetchBreads: () => dispatch(fetchAllBreads())
    }
}

export default connect(msp, mdp)(MainPage);