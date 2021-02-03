import { connect } from 'react-redux';
import MainPage from './main';
import { fetchAllBreads } from '../../actions/bread_actions';

// this is for the mainnavbar 
const msp = (state, ownProps) => {
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