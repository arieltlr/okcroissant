import * as APIUtil from '../util/reviews_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_SINGLE_REVIEW = "RECEIVE_SINGLE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RECEIVE_REVIEW_EDIT = "RECEIVE_REVIEW_EDIT";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

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

export const receiveReviewToUpdate = (review) => ({
    type: RECEIVE_REVIEW_EDIT,
    review
})
export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviewEdit = (reviewId) => dispatch => {
    debugger
    return APIUtil.fetchOneReview(reviewId).then(review => (
        dispatch(receiveReviewToUpdate(review))
    ))
}

export const fetchAllReviews = () => dispatch =>{
    //  
    return APIUtil.fetchAllReviews().then((reviews) => (
        dispatch(receiveReviews(reviews))
    ))
}
export const fetchOneReview = (breadId) => dispatch =>{
    //  
    return APIUtil.fetchOneReview(breadId).then((review) => (
        dispatch(receiveSingleReview(review))
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
    debugger
    return APIUtil.createReview(review).then(review => (
        dispatch(receiveSingleReview(review))
    ),
        err => (
            dispatch(receiveErrors(err.response.data))
    )
    )  
}
export const updateReview = review => dispatch => {
    debugger
    return APIUtil.updateReview(review).then(review => (
        dispatch(receiveSingleReview(review))  
    ), 
    err => console.log(err)
    )
}
export const deleteReview = reviewId => dispatch => {
    debugger
    return APIUtil.deleteReview(reviewId).then(() => (
        dispatch(removeReview(reviewId))  
    ), 
    err => console.log(err)
    )
}
    