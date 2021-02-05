import { connect } from 'react-redux';
import { getBreadProfileResponses } from '../../actions/bread_profile_actions';
import SuggestedSlider from './suggested_slider';
import { fetchSuggestBreads } from '../../actions/bread_actions';

const mapStateToProps = (state) => {
    //  
    return {
        user: state.session.user,
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