import { RECEIVE_BREAD_MATCHES } from '../actions/bread_actions'

const breadMatchesReducer = (state= {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_BREAD_MATCHES:
            return action.breadMatches;
        default:
            return state;
    }
}

export default breadMatchesReducer;