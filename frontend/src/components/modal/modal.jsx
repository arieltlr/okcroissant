import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import {connect} from 'react-redux';
import SignupContainer from '../../components/session/signup_container';

function Modal ({modal, closeModal}) {
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

const mstp = state => {
    return {
        modal: state.ui.modal
    }
}
const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mstp, mdtp)(Modal);