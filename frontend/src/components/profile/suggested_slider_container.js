import { connect } from 'react-redux';
import { getBreadProfileResponses } from '../../actions/bread_profile_actions';
import SuggestedSlider from './suggested_slider';
import { fetchSuggestBreads } from '../../actions/bread_actions';

const mapStateToProps = (state) => {
    debugger
    return {
        breadProfile: state.breadProfile,
        breads: state.breads
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchSuggestBreads: breadData => dispatch(fetchSuggestBreads(breadData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedSlider);