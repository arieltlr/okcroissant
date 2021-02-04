import * as APIUtil from '../util/reviews_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_SINGLE_REVIEW = "RECEIVE_SINGLE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});
export const receiveSingleReview = (review) => ({
    type: RECEIVE_SINGLE_REVIEW,
    review
});
export const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const fetchAllReviews = () => dispatch =>{
    // debugger
    return APIUtil.fetchAllReviews().then((reviews) => (
        dispatch(receiveReviews(reviews))
    ))
}
export const fetchBreadReviews = (breadId) => dispatch =>{
    return APIUtil.fetchBreadReviews(breadId).then((reviews) => (
        dispatch(receiveReviews(reviews))
    ))
}
export const fetchUsersReviews = (userId) => dispatch =>{
    return APIUtil.fetchUsersReviews(userId).then((reviews) => (
        dispatch(receiveReviews(reviews))
    ))
}
export const createReview = review => dispatch => {
    return APIUtil.createReview(review).then(review => (
        dispatch(receiveSingleReview(review))
    ),
        err => (
            dispatch(receiveErrors(err.response.data))
    )
    )  
    }
export const updateReview = review => dispatch => (
    APIUtil.updateReview(review).then(review => (
        dispatch(receiveSingleReview(review))
        .catch(err => receiveErrors(err))
    ))  
)