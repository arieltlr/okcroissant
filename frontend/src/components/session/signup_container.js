import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import {openModal, closeModal} from '../../actions/modal_actions'; 

const mapStateToProps = (state) => {
  // debugger
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
    otherForm: (
            <button className="otherFormButton" onClick={() => dispatch(openModal('login'))}>
                Already a member? Log in
            </button>
        ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
