import { RECEIVE_BREAD_PROFILE_RESPONSES } from '../actions/bread_profile_actions';

const breadProfileReducer = (state= {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BREAD_PROFILE_RESPONSES:
            return action.responses;
        default:
            return state;
    }
}

export default breadProfileReducer;