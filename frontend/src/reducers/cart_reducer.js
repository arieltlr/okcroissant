import { DELETE_CART_ITEM, CREATE_CART_ITEM, RECEIVE_CART_ITEMS} from '../actions/cart_actions';

const CartReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_ITEMS: {
            debugger
            return action.items;

        }
        case CREATE_CART_ITEM: {
            debugger
            const nextState = Object.assign([], state, { [action.item.data._id]: action.item.data });
            return nextState;
        }
        case DELETE_CART_ITEM: {
            const nextState = Object.assign([], state);
            delete nextState[action.breadId];
            return nextState;

        }
        default:
            return state;
    }
}

export default CartReducer;