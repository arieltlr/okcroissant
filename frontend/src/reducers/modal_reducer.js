import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';
import { RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_BREAD_PROFILE_RESPONSES } from '../actions/bread_profile_actions';
import { RECEIVE_SINGLE_REVIEW } from '../actions/review_actions';

const modalReducer = (state=null, action) => {
    Object.freeze(state);
    //  
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_USER_SIGN_IN:
            return null;
        case RECEIVE_CURRENT_USER:
            return null;
        case RECEIVE_BREAD_PROFILE_RESPONSES:
            return null;
        case RECEIVE_SINGLE_REVIEW:
            return null;
        default:
            return state;
    }
}

export default modalReducer;
