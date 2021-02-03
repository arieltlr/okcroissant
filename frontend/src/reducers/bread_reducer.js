import { RECEIVE_ALL_BREADS, RECEIVE_A_BREAD, RECEIVE_SUGGESTED_BREADS } from '../actions/bread_actions';

const breadReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BREADS:
            return action.breads.data
        case RECEIVE_A_BREAD:
            return Object.assign({}, state, { [action.bread.id]: action.bread })
        case RECEIVE_SUGGESTED_BREADS:
            // debugger
            return action.breads.data
        default: 
            return state;
    }
}

export default breadReducer;