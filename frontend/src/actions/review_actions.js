import * as APIUtil from '../util/reviews_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_SINGLE_REVIEW = "RECEIVE_SINGLE_REVIEW";

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
});
export const receiveSingleReview = (review) => ({
    type: RECEIVE_SINGLE_REVIEW,
    review
});

export const fetchAllReviews = () => dispatch =>{
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
        dispatch(receiveSingleReviews(review))
    ))  
    }
export const updateReview = review => dispatch => (
    APIUtil.updateReview(review).then(review => (
        dispatch(receiveSingleReview(review))
    ))  
)