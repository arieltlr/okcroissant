import { DELETE_CART_ITEM, CREATE_CART_ITEM, RECEIVE_CART_ITEMS} from '../actions/cart_actions';

const CartReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS: {
            // debugger
            return action.items;

        }
        case CREATE_CART_ITEM: {
            // debugger
            const nextState = Object.assign([], state.cart, { [action.item.data]: action.item.data });
            return nextState;
        }
        case DELETE_CART_ITEM: {
            const nextState = Object.assign([], state.cart);
            delete nextState[action.breadId];
            return nextState;

        }
        default:
            // debugger
            return state;
    }
}

export default CartReducer;