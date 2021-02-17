import { RECEIVE_REVIEW_EDIT } from '../actions/review_actions';


const reviewEdit = (state = {}, action) => {
    Object.freeze(state);
    //  
    switch (action.type) {
        case RECEIVE_REVIEW_EDIT:
            
            return Object.assign({}, { [action.review.data._id]: action.review.data })

        default:
            return state;
    }
}

export default reviewEdit;