import axios from 'axios';

export const fetchAllReviews = () => {
    return axios.get('/api/reviews/')
}
export const fetchOneReview = (reviewId) => {
    return axios.get(`/api/reviews/${reviewId}`)
}
export const fetchBreadReviews = (breadId) => {
    return axios.get(`/api/reviews/bread/${breadId}`)
};
export const fetchUsersReviews = (userId) => {
    return axios.get(`/api/reviews/user/${userId}`)
};

export const createReview = (review) => {
    debugger
    return axios.post('/api/reviews/', review)
}

export const updateReview = (review) => {
    return axios.patch(`/api/reviews/${review.id}`, review)
};
export const deleteReview = reviewId => {
    return axios.delete(`/api/reviews/${reviewId}`)
};
