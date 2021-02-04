import { DELETE_CART_ITEM, RECEIVE_CART_USER} from '../actions/cart_actions';

const CartReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CART_USER:
            debugger // look at nextstate
            return action.user
        case DELETE_CART_ITEM:
            const nextState = Object.assign({}, state)
            debugger // look at nextstate
            delete nextState[action.breadId]
            debugger //make sure its gone
            return nextState;
        default:
            return state;
    }
}

export default CartReducer;