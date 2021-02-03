import * as APIUtil from '../util/breadprofile_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_BREAD_PROFILE_RESPONSES = "RECEIVE_BREAD_PROFILE_RESPONSES";

export const receiveBreadMatches = responses => ({
    type: RECEIVE_BREAD_PROFILE_RESPONSES,
    responses
});

export const getBreadProfileResponses = userId => dispatch =>{
    return APIUtil.getBreadprofileResponses(userId).then((breadMatches) => (
        dispatch(receiveBreadMatches(breadMatches))
    ))
}
export const createBreadProfile = breadProfile => dispatch => (
    APIUtil.createBreadprofile(breadProfile).then(breadProfile => (
        dispatch(receiveBreadMatches(breadProfile))
    ))  
)
export const updateBreadProfile = breadProfile => dispatch => (
    APIUtil.updateBreadprofile(breadProfile).then(breadProfile => (
        dispatch(receiveBreadMatches(breadProfile))
    ))  
)
