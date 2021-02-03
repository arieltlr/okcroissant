import { connect } from 'react-redux';
import { getBreadProfileResponses, createBreadProfile, updateBreadProfile } from '../../actions/bread_profile_actions';
import ProfileShow from './profile_show';

const mstp = (state) => {
    return {
        breadProfile: state.breadProfile,
        user: state.session.user
    };
};

const mdtp = (dispatch) => {
    return {
        getBreadProfileResponses: (userId) => dispatch(getBreadProfileResponses(userId)),
        createBreadProfile: breadProfile => dispatch(createBreadProfile(breadProfile)),
        updateBreadProfile: breadProfile => dispatch(updateBreadProfile(breadProfile))
    }
}

export default connect(mstp, mdtp)(ProfileShow);