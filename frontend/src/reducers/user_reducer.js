import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';
import { RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const userReducer = (state= {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BREAD_MATCHES:
            return action.breadMatches;
        default:
            return state;
    }
}

export default userReducer;