import * as APIUtil from '../util/cart_utils';

export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const CREATE_CART_ITEM = "CREATE_CART_ITEM";

export const createCartItem = item => ({
    type: CREATE_CART_ITEM,
    item: item
});
export const recieveCartItems = items => ({
    type: RECEIVE_CART_ITEMS,
    items: items
});


export const removeCartItem = breadId => ({
    type: DELETE_CART_ITEM,
    breadId: breadId
});

export const createUserCartItem = (item) => dispatch => {
    // debugger
    return APIUtil.createCartItem(item)
        .then((item) => dispatch(createCartItem(item)))
}

export const fetchUserCartItems = userId => dispatch => {
    // debugger
    return APIUtil.fetchUsersBreads(userId)
        .then((items) => {
            // debugger
            return (dispatch(recieveCartItems(items)))})
}

export const deleteBreadItem = breadId => dispatch => {
    // debugger
    return APIUtil.deleteBreadItem(breadId)
        .then(() => {
            // debugger
            return (dispatch(removeCartItem(breadId)))})
}
