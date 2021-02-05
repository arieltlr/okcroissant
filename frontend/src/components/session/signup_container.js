import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import {openModal, closeModal} from '../../actions/modal_actions'; 

const mapStateToProps = (state) => {
  //  
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    openModal: modal => dispatch(openModal(modal)), 
    closeModal: () => dispatch(closeModal()),
    refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),
    otherForm: (
            <button className="other-form-button-sign-up" onClick={() => dispatch(openModal('login'))}>
                Already a member? Log in
            </button>
        ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
