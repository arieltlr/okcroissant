import * as APIUtil from '../util/breadprofile_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_BREAD_MATCHES = "RECEIVE_BREAD_MATCHES";

export const receiveBreadMatches = breadMatches => ({
    type: RECEIVE_BREAD_MATCHES,
    breadMatches
});

export const getBreadMatches = userId => dispatch =>{
    return APIUtil.getBreadprofile(userId).then((breadMatches) => (
        dispatch(receiveBreadMatches(breadMatches))
    ), err => {
        return (
            dispatch(receiveErrors(err.response.data))
        )   
    })
}
export const createBreadProfile = breadProfile => dispatch => (
    APIUtil.createBreadprofile(breadProfile).then(breadProfile => (
        dispatch(receiveBreadMatches(breadProfile))
    ), err => {
        return (
            dispatch(receiveErrors(err.response.data))
        )
    })  
)
export const updateBreadProfile = breadProfile => dispatch => (
    APIUtil.updateBreadprofile(breadProfile).then(breadProfile => (
        dispatch(receiveBreadMatches(breadProfile))
    ), err => {
        return (
            dispatch(receiveErrors(err.response.data))
        )
    })  
)
