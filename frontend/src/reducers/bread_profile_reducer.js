import { RECEIVE_BREAD_PROFILE_RESPONSES } from '../actions/bread_profile_actions';
import {RECEIVE_USER_LOGOUT} from '../actions/session_actions'
const removeProfile = {};
const breadProfileReducer = (state= {}, action) => {
    Object.freeze(state);
    //  
    switch (action.type) {
        case RECEIVE_BREAD_PROFILE_RESPONSES:
             
            return action.responses.data;
        case RECEIVE_USER_LOGOUT:
            return removeProfile;
        default:
            return state;
    }
}

export default breadProfileReducer;