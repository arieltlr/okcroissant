import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {connect} from 'react-redux';
import SignupContainer from '../../components/session/signup_container';
import LoginContainer from '../../components/session/login_container';
import EditBProfileContainer from '../../components/profile/edit_bprofile_container';
import CreateReviewContainer from '../../components/reviews/create_review_container';
import EditReviewContainer from '../../components/reviews/edit_review_container';
import { withRouter } from 'react-router-dom';

function Modal ({modal, closeModal}, props) {
    if (!modal) {
        return null;
    }
    let component;
    let form;
    switch (modal) {
        case 'signup': 
            component = <SignupContainer /> 
            form = "signup-modal";
            break;
        case 'login': 
            component = <LoginContainer /> 
            form = "login-modal";
            break;
        case 'edit-bprofile': 
            component = <EditBProfileContainer /> 
            form = "edit-bprofile-modal";
            break;
        case 'review': 
            component = <CreateReviewContainer /> 
            form = "create-review-modal";
            break;
        case 'edit-review': 
            component = <EditReviewContainer /> 
            form = "edit-review-modal";

            break;
        default: 
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={form} onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mstp = (state) => {
    return {
        modal: state.ui.modal
    }
}
const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mstp, mdtp)(Modal));
