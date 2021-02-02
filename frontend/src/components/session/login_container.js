import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import {openModal, closeModal} from '../../actions/modal_actions'; 

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),
    otherForm: (
            <button className="otherFormButton" onClick={()=> dispatch(openModal('signup'))}>
                New to OK Croissant? Sign up
            </button>
        ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);