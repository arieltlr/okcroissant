import { connect } from 'react-redux';
import { getBreadProfileResponses, updateBreadProfile } from '../../actions/bread_profile_actions';
import EditBProfile from './edit_bprofile';

const mstp = (state) => {
    // debugger
    return {
        breadProfile: state.breadProfile,
        user: state.session.user
    };
};

const mdtp = (dispatch) => {
    return {
        getBreadProfileResponses: (userId) => dispatch(getBreadProfileResponses(userId)),
        updateBreadProfile: breadProfile => dispatch(updateBreadProfile(breadProfile))
    }
}

export default connect(mstp, mdtp)(EditBProfile);