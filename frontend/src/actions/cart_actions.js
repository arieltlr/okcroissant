import * as APIUtil from '../util/cart_utils';

export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const RECEIVE_CART_USER = "RECEIVE_CART_USER";

export const recieveCartItems = user => ({
    type: RECEIVE_CART_USER,
    user: user
});


export const removeCartItem = breadId => ({
    type: DELETE_CART_ITEM,
    breadId: breadId
});

export const fetchUserCartItems = userId => dispatch => {
    debugger
    return APIUtil.fetchUsersBreads(userId)
        .then((user) => {
            debugger
            return (dispatch(recieveCartItems(user)))})
}

export const deleteBreadItem = breadId => dispatch => {
    debugger
    return APIUtil.deleteBreadItem(breadId)
        .then(() => {
            debugger
            return (dispatch(removeCartItem(breadId)))})
}
