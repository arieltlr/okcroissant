import { RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';


const ReviewErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            // debugger
            return action.errors;
        default:
            return state;
    }
}

export default ReviewErrorsReducer;