import { RECEIVE_ALL_REVIEWS, RECEIVE_SINGLE_REVIEW} from '../actions/review_actions';


const reviews = (state = {}, action) => {
    Object.freeze(state);
    //  
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            // debugger
            let array = {}
            action.reviews.data.forEach(review => {

                array[review._id] = review
            })
            // debugger
            return array
        case RECEIVE_SINGLE_REVIEW:
            debugger
            const newState = Object.assign({}, state, { [action.review.data._id]: action.review.data })
            //   
            return newState;
        default:
            return state;
    }
}

export default reviews;