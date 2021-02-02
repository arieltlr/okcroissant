import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';
import { RECEIVE_USER_SIGN_IN } from '../actions/session_actions'

const modalReducer = (state=null, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_USER_SIGN_IN:
            return null;
        default:
            return state;
    }
}

export default modalReducer;