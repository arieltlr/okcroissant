import { DELETE_CART_ITEM, CREATE_CART_ITEM, RECEIVE_CART_ITEMS} from '../actions/cart_actions';

const CartReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    debugger
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            debugger 
            return action.items
        case CREATE_CART_ITEM:
            debugger
            nextState = Object.assign({}, state, {id: action.item});
            return nextState
        case DELETE_CART_ITEM:
            nextState = Object.assign({}, state)
            debugger // look at nextstate
            delete nextState[action.breadId]
            debugger //make sure its gone
            return nextState;
        default:
            return state;
    }
}

export default CartReducer;