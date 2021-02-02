import { connect } from 'react-redux';
import { getBreadMatches, createBreadProfile, updateBreadProfile } from '../../actions/bread_actions';
import ProfileShow from './profile_show'

const mstp = (state) => {
    return {
        breadMatches: state.breadMatches,
        user: state.session.user
    };
};

const mdtp = (dispatch) => {
    return {
        getBreadMatches: (userId) => dispatch(getBreadMatches(userId)),
        createBreadProfile: breadProfile => dispatch(createBreadProfile(breadProfile)),
        updateBreadProfile: breadProfile => dispatch(updateBreadProfile(breadProfile))
    }
}

export default connect(mstp, mdtp)(ProfileShow);