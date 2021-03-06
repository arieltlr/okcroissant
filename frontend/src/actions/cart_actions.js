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


export const removeCartItem = (itemId)=> ({
    type: DELETE_CART_ITEM,
    itemId: itemId
     });

export const createUserCartItem = (item) => dispatch => {
    //  
    return APIUtil.createCartItem(item)
        .then((item) => dispatch(createCartItem(item)))
}

export const fetchUserCartItems = userId => dispatch => {
    //  
    return APIUtil.fetchUsersBreads(userId)
        .then((items) => {
            //  
            return (dispatch(recieveCartItems(items)))})
}

export const deleteBreadItem = (itemId) => dispatch => {
    //  
    return APIUtil.deleteBreadItem(itemId)
        .then(() => {
            //  
            return (dispatch(removeCartItem(itemId)))})
}
