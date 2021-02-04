import * as APIUtil from '../util/breadprofile_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_BREAD_PROFILE_RESPONSES = "RECEIVE_BREAD_PROFILE_RESPONSES";

export const receiveProfileRes = responses => ({
    type: RECEIVE_BREAD_PROFILE_RESPONSES,
    responses
});

export const getBreadProfileResponses = userId => dispatch =>{
    debugger
    return APIUtil.getBreadprofileResponses(userId).then((responses) => (
        dispatch(receiveProfileRes(responses))
    ))
}
export const createBreadProfile = breadProfile => dispatch => {
    return APIUtil.createBreadprofile(breadProfile).then(breadProfile => (
        dispatch(receiveProfileRes(breadProfile))
    ))  
    }
export const updateBreadProfile = breadProfile => dispatch => (
    APIUtil.updateBreadprofile(breadProfile).then(breadProfile => (
        dispatch(receiveProfileRes(breadProfile))
    ))  
)
