import { RECEIVE_ALL_BREADS, RECEIVE_A_BREAD, RECEIVE_SUGGESTED_BREADS } from '../actions/bread_actions';

const breadReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BREADS:
            let array = {}
            action.breads.data.forEach(bread => {
                array[bread._id] = bread
            })
            return array
        case RECEIVE_A_BREAD:
            const newState = Object.assign({}, state, { [action.bread.data._id]: action.bread.data })
            debugger 
            return newState;
        case RECEIVE_SUGGESTED_BREADS:
            // debugger
            return action.breads.data
        default: 
            return state;
    }
}

export default breadReducer;