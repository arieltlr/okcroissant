import { connect } from 'react-redux';
import { getBreadProfileResponses, createBreadProfile, updateBreadProfile } from '../../actions/bread_profile_actions';
import ProfileShow from './profile_show';
import { openModal } from '../../actions/modal_actions';

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
        createBreadProfile: breadProfile => dispatch(createBreadProfile(breadProfile)),
        updateBreadProfile: breadProfile => dispatch(updateBreadProfile(breadProfile)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mstp, mdtp)(ProfileShow);