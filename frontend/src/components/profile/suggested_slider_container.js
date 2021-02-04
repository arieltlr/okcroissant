import { connect } from 'react-redux';
import { getBreadProfileResponses } from '../../actions/bread_profile_actions';
import SuggestedSlider from './suggested_slider';
import { fetchSuggestBreads } from '../../actions/bread_actions';

const mapStateToProps = (state) => {
    debugger
    return {
        user: state.session.user,
<<<<<<< HEAD
=======
        breadProfile: state.breadProfile,
>>>>>>> e738ac96067b6b9967ea1aa2c4ce8d4c3fb70c1c
        breads: state.bread
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchSuggestBreads: breadData => dispatch(fetchSuggestBreads(breadData)),
        getBreadProfileResponses: userId => dispatch(getBreadProfileResponses(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedSlider);