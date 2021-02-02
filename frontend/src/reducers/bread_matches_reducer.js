import { RECEIVE_BREAD_MATCHES } from '../actions/bread_actions'
import { RECEIVE_BREAD_PROFILE_RESPONSES } from '../actions/bread_profile_actions';

const breadMatchesReducer = (state= {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BREAD_PROFILE_RESPONSES:
            return action.responses;
        default:
            return state;
    }
}

export default breadMatchesReducer;