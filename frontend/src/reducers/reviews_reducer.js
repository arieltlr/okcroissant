import { RECEIVE_ALL_REVIEWS, RECEIVE_SINGLE_REVIEW} from '../actions/review_actions';


const reviews = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_SINGLE_REVIEW:
            return action.review;
        default:
            return state;
    }
}

export default reviews;